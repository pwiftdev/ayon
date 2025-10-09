import { NextRequest, NextResponse } from 'next/server';

// Force Vercel deployment

export async function POST(request: NextRequest) {
  try {
    const { email, listId } = await request.json();

    if (!email || !listId) {
      return NextResponse.json(
        { error: 'Email and listId are required' },
        { status: 400 }
      );
    }

    const klaviyoApiKey = process.env.KLAVIYO_API_KEY;

    if (!klaviyoApiKey) {
      console.error('KLAVIYO_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // First, create or update the profile
    const profileRequestBody = {
      data: {
        type: 'profile',
        attributes: {
          email: email,
        }
      }
    };

    console.log('Creating profile in Klaviyo:', JSON.stringify(profileRequestBody, null, 2));

    const profileResponse = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
        'revision': '2024-10-15',
      },
      body: JSON.stringify(profileRequestBody),
    });

    const profileText = await profileResponse.text();
    console.log('Profile response status:', profileResponse.status);
    console.log('Profile response:', profileText);

    let profileData;
    try {
      profileData = profileText ? JSON.parse(profileText) : null;
    } catch (e) {
      console.error('Failed to parse profile response:', e);
      return NextResponse.json(
        { error: 'Failed to create profile', details: profileText },
        { status: 500 }
      );
    }

    let profileId;

    if (profileResponse.status === 409 || profileResponse.status === 400) {
      // Profile already exists, try to get it by email
      console.log('Profile already exists, fetching by email...');
      
      const getProfileResponse = await fetch(`https://a.klaviyo.com/api/profiles/?filter=equals(email,"${email}")`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
          'revision': '2024-10-15',
        },
      });

      const getProfileText = await getProfileResponse.text();
      console.log('Get profile response:', getProfileText);

      const getProfileData = getProfileText ? JSON.parse(getProfileText) : null;
      profileId = getProfileData?.data?.[0]?.id;
      console.log('Fetched profile ID:', profileId);
    } else if (profileResponse.ok) {
      // Profile was created successfully
      profileId = profileData?.data?.id;
      console.log('Created profile ID:', profileId);
    } else {
      // Some other error
      return NextResponse.json(
        { error: 'Failed to create profile', details: profileData },
        { status: profileResponse.status }
      );
    }

    if (!profileId) {
      return NextResponse.json(
        { error: 'Could not get profile ID', details: profileData },
        { status: 500 }
      );
    }

    // Now subscribe the profile to the list using the relationships endpoint
    const subscribeRequestBody = {
      data: [
        {
          type: 'profile',
          id: profileId
        }
      ]
    };

    console.log('Subscribing to list:', listId, 'with profile:', profileId);

    const response = await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${klaviyoApiKey}`,
        'revision': '2024-10-15',
      },
      body: JSON.stringify(subscribeRequestBody),
    });

    console.log('Klaviyo API response status:', response.status);
    console.log('Klaviyo API response headers:', Object.fromEntries(response.headers.entries()));

    // Get response text first to see what we're getting
    const responseText = await response.text();
    console.log('Klaviyo API raw response:', responseText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = responseText ? JSON.parse(responseText) : { message: 'Empty response' };
      } catch (e) {
        errorData = { message: 'Invalid JSON response', raw: responseText };
      }
      console.error('Klaviyo API error:', JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        { error: 'Failed to subscribe to mailing list', details: errorData },
        { status: response.status }
      );
    }

    let data;
    try {
      data = responseText ? JSON.parse(responseText) : { success: true };
    } catch (e) {
      data = { success: true, raw: responseText };
    }
    console.log('Klaviyo API success:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error subscribing to Klaviyo:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: 'An error occurred while subscribing', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

