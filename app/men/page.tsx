"use client";

import Image from "next/image";
import { useState } from "react";

export default function MenPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    const listId = process.env.NEXT_PUBLIC_KLAVIYO_MEN_LIST_ID;
    console.log('List ID:', listId);

    if (!listId) {
      console.error('NEXT_PUBLIC_KLAVIYO_MEN_LIST_ID is not defined');
      setSubmitMessage('Configuration error. Please contact support.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/klaviyo/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listId: listId,
        }),
      });

      const data = await response.json();
      console.log('API response:', data);

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thanks';
      } else {
        console.error('API error:', data);
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#211F1F' }}>
      {/* Top Banner */}
      <div className="w-full py-3 md:py-3 h-[59.5px] md:h-[59.5px] sticky top-0 z-50" style={{ backgroundColor: '#211F1F' }}>
        <div className="flex items-center justify-center gap-2 h-full">
          <span className="text-sm font-medium tracking-wide uppercase" style={{ color: 'white', fontFamily: 'var(--font-aeonik-mono)', fontSize: '21px' }}>
            LAUNCHING SOON ON
          </span>
          <Image
            src="/Assets/landingpagenew/kickstarterlogogreen.png"
            alt="Kickstarter"
            width={126}
            height={16.1}
            className="h-[16.1px] w-[126px] md:h-[15.4px] md:w-[128.8px]"
            unoptimized
          />
        </div>
      </div>

      {/* Mobile Pre-Hero Section */}
      <div className="block md:hidden w-full pt-8 pb-16" style={{ backgroundColor: '#F4F1EE' }}>
        <div className="flex flex-col items-center text-center px-4">
          {/* Ayon Logo */}
          <div className="mb-4">
            <Image
              src="/Assets/ayonlogopngblack.png"
              alt="ayon"
              width={130}
              height={29}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Subtitle Text */}
          <p className="mb-6" style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: '15px', 
            color: '#211F1F',
            lineHeight: '1.5'
          }}>
            <span className="font-bold">smart workout companion</span> for your home
          </p>

          {/* Transformation GIF with Overlapping Image */}
          <div className="relative flex justify-center">
            <Image
              src="/Assets/landingpagenew/Ayon_Transformation_Man_v2.gif"
              alt="Ayon Transformation"
              width={480}
              height={1000}
              className="object-contain"
              unoptimized
            />
            {/* Overlapping Image */}
            <div className="absolute bottom-0 left-0 right-0 transform translate-y-8 px-4">
              <Image
                src="/Assets/landingpagenew/mobileheronew.png"
                alt="Mobile Hero New"
                width={400}
                height={350}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
          
          {/* Notify Me Button */}
          <div className="flex justify-center -mt-4 relative z-10">
            <button 
              onClick={() => {
                const emailSection = document.getElementById('email-signup');
                if (emailSection) {
                  emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  
                  // Multiple attempts to focus the input for better mobile support
                  const focusInput = () => {
                    const emailInput = document.querySelector('#email-signup input[type="email"]') as HTMLInputElement;
                    if (emailInput) {
                      // Force focus and click for mobile devices
                      emailInput.click();
                      emailInput.focus();
                      // Additional mobile-specific focus attempt
                      emailInput.setSelectionRange(0, 0);
                      return true;
                    }
                    return false;
                  };
                  
                  // Try immediate focus first
                  if (!focusInput()) {
                    // If immediate focus fails, try with delays
                    setTimeout(focusInput, 300);
                    setTimeout(focusInput, 800);
                    setTimeout(focusInput, 1200);
                  }
                }
              }}
              className="font-medium capitalize tracking-wider transition-all duration-300 border border-black hover:scale-105"
              style={{ 
                width: '269px', 
                height: '75px', 
                borderRadius: '37.5px',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'var(--font-aeonik)',
                backgroundColor: '#2BDE73',
                color: 'white',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Notify Me At Launch
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Gradient Section */}
      <div 
        className="block md:hidden w-full h-[150px] relative"
        style={{
          background: 'linear-gradient(to bottom, #f4f1ee, #e7dcd1)'
        }}
      >
        {/* Text Overlay in Gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 px-4 max-w-md w-full">
          <p className="text-center mb-2" style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: '34px', 
            color: '#211F1F',
            lineHeight: '1.2'
          }}>
            <span className="font-bold">Holds you accountable</span><br />to keep training
          </p>
          <p className="text-center" style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: '16px', 
            color: '#211F1F',
            lineHeight: '1.5'
          }}>
            Tracks your progress, corrects your form and motivates you.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[700px] md:h-[769px]">
        {/* Background Image - Full Viewport */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Desktop Background */}
          <Image
            src="/Assets/landingpagenew/herosectionjpeg.jpg"
            alt="ayon hero"
            width={1200}
            height={769}
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            priority
            unoptimized
          />
          {/* Mobile Background */}
          <Image
            src="/Assets/landingpagenew/mobilemenimage.png"
            alt="mobile men image"
            width={0}
            height={0}
            className="absolute inset-0 w-full h-full object-cover block md:hidden"
            priority
            unoptimized
          />
          {/* Mobile Gradient Overlay */}
          <div 
            className="absolute inset-0 block md:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(231, 220, 209, 1), rgba(231, 220, 209, 0) 30%)'
            }}
          ></div>
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full h-full">
          {/* Centered Logo and Subtitle Group - Desktop Only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center top-[120px] md:top-[200px] md:translate-y-0 hidden md:flex">
            {/* AYON Logo */}
            <div className="mb-4">
              <Image
                src="/Assets/ayonlogopngwhite.png"
                alt="ayon"
                width={162}
                height={36}
                className="object-contain md:w-[272px] md:h-[61px]"
                unoptimized
              />
            </div>

            {/* Subtitle */}
            <p className="font-bold tracking-wide text-[21px] leading-[21px]" style={{ color: 'white' }}>
              smart workout companion<br />for your home
            </p>
          </div>

          {/* Transformation GIF - Responsive distance from logo */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 -ml-[200px] md:-ml-[300px] lg:-ml-[400px] xl:-ml-[500px] hidden md:block max-w-[25%] h-[70%]">
            <Image
              src="/Assets/landingpagenew/Ayon_Transformation_Man_v2.gif"
              alt="Ayon Transformation"
              width={336}
              height={700}
              className="object-contain w-full h-full"
              unoptimized
            />
          </div>

          {/* Mobile Image - Positioned 10px from bottom on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[10px] block md:hidden w-[90%]">
            <Image
              src="/Assets/landingpagenew/section2-1left.png"
              alt="Section 2 left"
              width={585}
              height={130}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          {/* Desktop CTA Button - centered on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:top-1/2 md:mt-[182px] hidden md:block">
            <button 
              onClick={() => {
                const emailSection = document.getElementById('email-signup');
                if (emailSection) {
                  emailSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  
                  // Multiple attempts to focus the input for better mobile support
                  const focusInput = () => {
                    const emailInput = document.querySelector('#email-signup input[type="email"]') as HTMLInputElement;
                    if (emailInput) {
                      // Force focus and click for mobile devices
                      emailInput.click();
                      emailInput.focus();
                      // Additional mobile-specific focus attempt
                      emailInput.setSelectionRange(0, 0);
                      return true;
                    }
                    return false;
                  };
                  
                  // Try immediate focus first
                  if (!focusInput()) {
                    // If immediate focus fails, try with delays
                    setTimeout(focusInput, 300);
                    setTimeout(focusInput, 800);
                    setTimeout(focusInput, 1200);
                  }
                }
              }}
              className="font-medium capitalize tracking-wider transition-all duration-300 border border-black hover:scale-105"
              style={{ 
                width: '269px', 
                height: '75px', 
                borderRadius: '37.5px',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'var(--font-aeonik)',
                backgroundColor: '#2BDE73',
                color: 'white',
                border: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Notify Me At Launch
            </button>
          </div>
        </div>
      </div>

      {/* New Mobile Section */}
      <div className="block md:hidden w-full pt-16 pb-8" style={{ backgroundColor: '#F4F1EE' }}>
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <h1 className="mb-4 px-4" style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: '34px', 
            color: '#211F1F',
            lineHeight: '1.2'
          }}>
            <span className="font-bold">Short workouts that</span><br />fit your schedule
          </h1>

          {/* Subtitle */}
          <p className="mb-6 px-4" style={{ 
            fontFamily: 'var(--font-aeonik)', 
            fontSize: '16px', 
            color: '#211F1F',
            lineHeight: '1.5'
          }}>
            Ayon notices small breaks and turns it into short & effective workouts.
          </p>

          {/* First Image - 90% width */}
          <div className="mb-6 w-[90%]">
            <Image
              src="/Assets/landingpagenew/section3-1right.png"
              alt="Section 3 right"
              width={292}
              height={65}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>

          {/* Second Image - 100% width */}
          <div className="w-full">
            <Image
              src="/Assets/landingpagenew/groupmobile.png"
              alt="Group mobile"
              width={400}
              height={300}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Fourth Section - Mobile 4 Rows, Desktop 2 Columns */}
      <div className="w-full">
        {/* Mobile Layout - 2 Rows (3rd and 4th items only) */}
        <div className="block md:hidden">
          {/* Row 1: Description text */}
          <div className="w-full py-8" style={{ backgroundColor: '#F4F1EE' }}>
            <div className="text-center px-4">
              <p
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  color: '#211F1F',
                  fontSize: '22px',
                  lineHeight: '1.5'
                }}
              >
                Designed to track <strong>the effectiveness<br />
                of your workouts with</strong><br />
                <Image
                  src="/Assets/ayonlogopngblack.png"
                  alt="ayon"
                  width={60}
                  height={13}
                  className="inline-block mx-1"
                  unoptimized
                /> AI
              </p>
            </div>
          </div>

          {/* Row 2: Pills/Tags */}
          <div className="w-full relative" style={{ backgroundColor: '#F4F1EE' }}>
            {/* Background Image */}
            <div className="w-full">
              <Image
                src="/Assets/landingpagenew/graphbackground.png"
                alt="Graph background"
                width={0}
                height={0}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 px-2">
              {/* First row */}
              <div className="flex gap-2 justify-center flex-wrap">
                <div 
                  className="px-3 py-2 rounded-full border whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#211F1F',
                    color: '#211F1F',
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Repetition accuracy
                </div>
                <div 
                  className="px-3 py-2 rounded-full border whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#211F1F',
                    color: '#211F1F',
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Tempo and pacing
                </div>
                <div 
                  className="px-3 py-2 rounded-full border whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#211F1F',
                    color: '#211F1F',
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Fatigue markers
                </div>
                <div 
                  className="px-3 py-2 rounded-full border whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#211F1F',
                    color: '#211F1F',
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Tension Times
                </div>
                <div 
                  className="px-3 py-2 rounded-full border whitespace-nowrap text-xs sm:text-sm"
                  style={{
                    backgroundColor: 'white',
                    borderColor: '#211F1F',
                    color: '#211F1F',
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Heart rate zones
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 2 Columns */}
        <div className="hidden md:grid grid-cols-2 min-h-[400px]">
          {/* Left Column - Text Content */}
          <div 
            className="w-full h-full min-h-[400px] flex flex-col justify-center items-center px-8 py-12"
            style={{ backgroundColor: '#F4F1EE' }}
          >
            {/* Main Heading */}
            <h1 
              className="text-center"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                fontSize: '42px',
                lineHeight: '1.2',
                marginBottom: '60px'
              }}
            >
              <span className="font-bold">Holds you accountable</span><br />to keep training
            </h1>

            {/* Bottom Text Block */}
            <div className="text-center max-w-lg">
              <p
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  color: '#211F1F',
                  fontSize: '25px',
                  lineHeight: '1.5'
                }}
              >
                Tracks your progress, corrects your form and motivates you.
              </p>
            </div>
            
            {/* Additional Image */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/Assets/landingpagenew/section2-1left.png"
                alt="Section 2 left"
                width={585}
                height={130}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full h-full">
            <Image
              src="/Assets/landingpagenew/section2-1right.png"
              alt="Section 2 right"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Fifth Section - Mobile Text Only, Desktop 2 Columns */}
      <div className="w-full">
        {/* Mobile Layout - Text Only */}
        <div className="block md:hidden" style={{ backgroundColor: '#F4F1EE', paddingTop: '0px', paddingBottom: '72px' }}>
          <div className="flex flex-col justify-center items-center px-8 py-12">
            {/* Main Heading */}
            <h1 
              className="text-center font-bold"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                fontSize: '42px',
                lineHeight: '1.2',
                marginBottom: '60px'
              }}
            >
              Chat with a<br />professional
            </h1>

            {/* Message Images */}
            <div className="flex flex-col items-center gap-4 max-w-sm">
              {/* First message - slightly left */}
              <div className="self-start">
                <Image
                  src="/Assets/landingpagenew/message1.png"
                  alt="Message 1"
                  width={358}
                  height={181}
                  className="object-contain"
                  unoptimized
                />
              </div>
              
              {/* Second message - slightly right */}
              <div className="self-end">
                <Image
                  src="/Assets/landingpagenew/message2.png"
                  alt="Message 2"
                  width={213}
                  height={89}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 2 Columns */}
        <div className="hidden md:grid grid-cols-2 min-h-[400px]">
          {/* Left Column - Image */}
          <div className="w-full h-full">
            <Image
              src="/Assets/landingpagenew/section3-1left.png"
              alt="Section 3 left"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          
          {/* Right Column - Content */}
          <div 
            className="w-full h-full min-h-[400px] flex flex-col justify-center items-center px-8 py-12"
            style={{ backgroundColor: '#F4F1EE' }}
          >
            {/* Main Heading */}
            <h1 
              className="text-center"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                fontSize: '42px',
                lineHeight: '1.2',
                marginBottom: '60px'
              }}
            >
              <span className="font-bold">Short workouts</span><br />that fit your schedule
            </h1>

            {/* Subtitle */}
            <div className="text-center max-w-sm">
              <p
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  color: '#211F1F',
                  fontSize: '25px',
                  lineHeight: '1.5'
                }}
              >
                Ayon notices small breaks and turns it into short & effective workouts.
              </p>
            </div>
            
            {/* Additional Image */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/Assets/landingpagenew/section3-1right.png"
                alt="Section 3 right"
                width={292}
                height={65}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Email Signup Section */}
      <div className="w-full flex items-center justify-center relative" style={{ backgroundColor: '#211F1F', paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="text-center relative inline-block">
          {/* Soon on Kickstarter Badge - Mobile overlapping, Desktop inline */}
          <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 translate-x-16 md:hidden z-10">
            <Image
              src="/Assets/landingpagenew/soononkickstarter.png"
              alt="Soon on Kickstarter"
              width={120}
              height={40}
              className="object-contain"
              unoptimized
            />
          </div>
          
          {/* Main Heading - Centered */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 md:mb-12">
            <h1 
              className="font-bold leading-tight mb-8 text-[23px] md:text-[42px] md:mb-0"
              style={{
                fontFamily: 'var(--font-aeonik)',
                lineHeight: '1.2'
              }}
            >
              <span style={{ color: '#2BDE73' }}>Get notified</span> <span style={{ color: 'white' }}>when we go<br />
              live on Kickstarter</span>
            </h1>
            
            {/* Desktop Badge - Right of text */}
            <div className="hidden md:block">
              <Image
                src="/Assets/landingpagenew/soononkickstarter.png"
                alt="Soon on Kickstarter"
                width={120}
                height={40}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Email Input and Button */}
          <form onSubmit={handleEmailSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div 
              id="email-signup"
              className="relative flex items-center px-6 md:px-0"
              style={{ width: '450px', maxWidth: '450px' }}
            >
              {/* Email Input Field */}
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border-2 rounded-full focus:outline-none"
                style={{
                  backgroundColor: 'white',
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  borderColor: '#2BDE73',
                  color: '#211F1F'
                }}
              />
              <style jsx>{`
                input::placeholder {
                  color: #211F1F !important;
                }
              `}</style>
              
              {/* GET NOTIFIED Button - Round and Overlapping */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-0 top-0 bottom-0 px-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap hover:scale-105"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: '#2BDE73',
                  color: 'black',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'SENDING...' : 'GET NOTIFIED'}
              </button>
            </div>
          </form>
          
          {/* Success/Error Message - Below the form */}
          {submitMessage && (
            <p
              className="text-center mt-4"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '14px',
                color: submitMessage.includes('Thank you') ? '#4CAF50' : '#2BDE73'
              }}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </div>

      {/* Last Section - Mobile 3 Columns, Desktop 2 Columns */}
      <div className="w-full flex justify-center" style={{ backgroundColor: '#F4F1EE' }}>
        <div className="max-w-7xl w-full">
          {/* Mobile Layout - Overlapping Elements */}
          <div className="block md:hidden relative py-8" style={{ height: '500px' }}>
            {/* Column 1: Discount Text */}
            <div className="absolute top-8 left-0 right-0 flex flex-col justify-center items-center text-center px-4 z-10">
              <h1 
                className="font-bold leading-tight"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '38px',
                  lineHeight: '1.2'
                }}
              >
                <span style={{ color: '#211F1F' }}>Get a</span> <span style={{ color: '#2BDE73', fontWeight: 'bold' }}>$150 discount</span><br />
                <span style={{ fontSize: '20px' }}>only for <strong style={{ color: '#211F1F' }}>early subscribers.</strong></span>
              </h1>
            </div>

            {/* Column 2: Image */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-center items-center z-20">
              <Image
                src="/Assets/landingpagenew/lastsectionphotonew.png"
                alt="Last section photo new"
                width={400}
                height={280}
                className="w-[80%] h-auto object-contain"
                unoptimized
              />
            </div>

            {/* Column 3: AYON Pack */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-col justify-center items-center text-center px-4 z-10">
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/Assets/ayonlogopngblack.png"
                    alt="ayon"
                    width={60}
                    height={14}
                    className="object-contain"
                    unoptimized
                  />
                  <span 
                    style={{
                      fontFamily: 'var(--font-aeonik)',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#211F1F'
                    }}
                  >
                    Pack
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="text-center">
                <ul className="space-y-2">
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Ayon Smart Workout Companion
                  </li>
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Wireless Charging Case
                  </li>
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Free Ayon App with 5,000+ workouts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Layout - 2 Columns */}
          <div className="hidden md:grid grid-cols-2 min-h-[400px]">
            {/* Left Column - Image */}
            <div 
              className="flex justify-center items-center"
              style={{ backgroundColor: '#F4F1EE' }}
            >
              <Image
                src="/Assets/landingpagenew/lastsectionphotonew.png"
                alt="Last section photo new"
                width={530}
                height={370}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
            
            {/* Right Column - Background Color */}
            <div 
              className="w-full h-full min-h-[400px] flex flex-col justify-center items-start px-8 py-12"
              style={{ backgroundColor: '#F4F1EE' }}
            >
              {/* First Group */}
              <div className="text-left mb-8">
                <h1 
                  className="font-bold leading-tight"
                  style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '45px',
                    lineHeight: '1.2'
                  }}
                >
                  <span style={{ color: '#211F1F' }}>Get a</span> <span style={{ color: '#2BDE73', fontWeight: 'bold' }}>$150 discount</span><br />
                  <span style={{ fontSize: '30px' }}>only for <strong style={{ color: '#211F1F' }}>early subscribers.</strong></span>
                </h1>
              </div>

              {/* AYON Pack */}
              <div className="text-left mb-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/Assets/ayonlogopngblack.png"
                    alt="ayon"
                    width={80}
                    height={18}
                    className="object-contain"
                    unoptimized
                  />
                  <span 
                    style={{
                      fontFamily: 'var(--font-aeonik)',
                      fontSize: '29px',
                      fontWeight: 'bold',
                      color: '#211F1F'
                    }}
                  >
                    Pack
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="text-left mb-8">
                <ul className="space-y-2">
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '18px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Ayon Smart Workout Companion
                  </li>
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '18px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Wireless Charging Case
                  </li>
                  <li style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '18px',
                    fontWeight: 'medium',
                    color: '#211F1F'
                  }}>
                    Free Ayon App with 5,000+ workouts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div 
        className="w-full py-12"
        style={{ backgroundColor: '#211F1F' }}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* AYON Logo */}
          <div>
            <Image
              src="/Assets/ayonlogopngwhite.png"
              alt="Ayon Logo"
              width={120}
              height={27}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Launch soon on Kickstarter */}
          <div className="flex items-center gap-2">
            <span 
              className="text-sm font-medium tracking-wide"
              style={{ 
                color: 'white', 
                fontFamily: 'var(--font-aeonik-mono)', 
                fontSize: '16px' 
              }}
            >
              Launching soon on
            </span>
            <Image
              src="/Assets/landingpagenew/kickstarterlogogreen.png"
              alt="Kickstarter"
              width={100}
              height={13}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Copyright */}
          <div>
            <p 
              style={{
                color: 'white',
                fontFamily: 'var(--font-aeonik)',
                fontSize: '14px'
              }}
            >
              2025 Ayon. Build your future body. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
