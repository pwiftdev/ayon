"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set a fixed target date - your actual Kickstarter launch date
    // October 20, 2025 at 7:16:00 AM UTC
    const targetDate = new Date('2025-10-20T07:16:00Z');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#211F1F' }}>
      {/* Top Banner */}
      <div className="w-full py-3 md:py-3 h-[50px] md:h-auto" style={{ backgroundColor: '#211F1F' }}>
        <div className="flex items-center justify-center gap-2 h-full">
          <span className="text-sm font-medium tracking-wide uppercase" style={{ color: '#F78D1E', fontFamily: 'var(--font-aeonik-mono)', fontSize: '15px' }}>
            LAUNCHING SOON ON
          </span>
          <Image
            src="/Assets/Kickstarter_logo.png"
            alt="Kickstarter"
            width={90}
            height={11.5}
            className="h-[11.5px] w-[90px] md:h-[11px] md:w-[92px]"
            unoptimized
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[520px] md:h-[769px]">
        {/* Background Image - Full Viewport */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Assets/landingpage1assets/herosectiongif.png"
            alt="ayon personal health coach background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full h-full">
          {/* Centered Logo and Subtitle Group */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center top-[70px] md:top-1/2 md:-translate-y-1/2">
            {/* AYON Logo */}
            <div className="mb-4">
              <Image
                src="/Assets/ayonlogopngwhite.png"
                alt="ayon"
                width={162}
                height={36}
                className="object-contain md:w-[272px] md:h-[61px]"
              />
            </div>

            {/* Subtitle */}
            <p className="text-white font-bold tracking-wide text-[30px] leading-[30px] md:text-[40px] md:leading-[42px] md:w-[437px] md:h-[42px]">personal health<br className="md:hidden" />coach</p>
          </div>

          {/* CTA Button - Positioned 40px from bottom on mobile, centered on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[40px] md:top-1/2 md:mt-[182px]">
            <button 
              className="bg-white text-black font-medium uppercase tracking-wider hover:bg-gray-100 transition-colors border border-black"
              style={{ 
                width: '269px', 
                height: '75px', 
                borderRadius: '37.5px',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'var(--font-aeonik)'
              }}
            >
              NOTIFY ME AT LAUNCH
            </button>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="w-full bg-white flex items-center justify-center" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
        <div className="w-[680px] h-[350px] flex items-center justify-center relative">
          {/* Background Eclipse Group */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Assets/landingpage1assets/eclipsegroup.svg"
              alt="eclipse background"
              width={683}
              height={350}
              className="absolute opacity-100"
            />
          </div>
          
          {/* Text */}
          <h2 
            className="text-center font-bold leading-tight relative z-10"
            style={{
              fontFamily: 'var(--font-aeonik)',
              color: '#211F1F',
              fontSize: '40px',
              width: '381px',
              height: '84px',
              lineHeight: '42px'
            }}
          >
            Become a healthy version of yourself
          </h2>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full flex items-center justify-center md:px-0" style={{ backgroundColor: '#211F1F', paddingTop: '43px', paddingBottom: '43px', paddingLeft: '60px', paddingRight: '60px' }}>
        <div className="text-center">
          {/* 86% Stat */}
          <div 
            className="font-bold mb-2 text-[40px] md:text-[60px]"
            style={{
              fontFamily: 'var(--font-aeonik)',
              color: '#F78D1E'
            }}
          >
            86%
          </div>
          
          {/* Subtitle */}
          <div 
            className="font-medium text-[18px] md:text-[22px]"
            style={{
              fontFamily: 'var(--font-aeonik-mono)',
              color: '#F78D1E'
            }}
          >
            of users report building lasting healthy habits
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <Image
          src="/Assets/landingpage1assets/ayonimage1.jpg"
          alt="ayon product image"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Features Section */}
      <div className="w-full bg-white px-5 md:px-[120px]" style={{ paddingTop: '72px', paddingBottom: '100px' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] min-h-[350px]">
          {/* Mobile: Text First, Desktop: Left Side Eclipse */}
          <div className="flex flex-col justify-center order-1 md:order-1">
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F',
                lineHeight: '1.5'
              }}
            >
              Next-generation health device with built-in AI that guides your workouts and builds inner calm with guided meditation.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  motivates you
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  helps you train effective
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  talks with you
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Eclipse Second, Desktop: Right Side Eclipse */}
          <div className="relative flex items-center justify-center order-2 md:order-2">
            <Image
              src="/Assets/landingpage1assets/eclipsegroup.svg"
              alt="eclipse background"
              width={683}
              height={350}
              className="absolute opacity-100 object-contain w-[683px] h-[350px]"
            />
            <h2
              className="relative z-10 text-center font-bold text-[35px] md:text-[48px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                lineHeight: '1.2'
              }}
            >
              It's time<br />to get fit!
            </h2>
          </div>
        </div>
      </div>

      {/* GIF Section */}
      <div className="w-full">
        <Image
          src="/Assets/landingpage1assets/sectiongif2.jpg"
          alt="ayon product demonstration"
          width={1200}
          height={340}
          className="w-full h-[340px] md:h-[800px] object-cover"
        />
      </div>

      {/* Inner Calm Section - Reversed Layout */}
      <div className="w-full bg-white px-5 md:px-[120px]" style={{ paddingTop: '72px', paddingBottom: '100px' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] min-h-[350px]">
          {/* Mobile: Text First, Desktop: Left Side Description */}
          <div className="flex flex-col justify-center order-1 md:order-1">
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F',
                lineHeight: '1.5'
              }}
            >
              Guides your workouts and builds balanced lifestyle.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  observes and corrects your form
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  motivates you to stay on track
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  tracks your progress
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Eclipse Second, Desktop: Right Side Eclipse */}
          <div className="relative flex items-center justify-center order-2 md:order-2">
            <Image
              src="/Assets/landingpage1assets/eclipsegroup.svg"
              alt="eclipse background"
              width={683}
              height={350}
              className="absolute opacity-100 object-contain w-[683px] h-[350px]"
            />
            <h2
              className="relative z-10 text-center font-bold text-[40px] md:text-[48px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                lineHeight: '1.2'
              }}
            >
              Bring back your<br />inner calm.
            </h2>
          </div>
        </div>
      </div>

      {/* GIF Section 3 */}
      <div className="w-full relative">
        <Image
          src="/Assets/landingpage1assets/sectiongif3.jpg"
          alt="ayon product demonstration"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="pl-5 md:pl-[120px]">
            <h2
              className="font-bold text-[40px] md:text-[60px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: 'white'
              }}
            >
              MIND.
            </h2>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="w-full bg-white px-5 md:px-[120px]" style={{ paddingTop: '72px', paddingBottom: '100px' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[100px] min-h-[350px]">
          {/* Mobile: Text First, Desktop: Left Side Description */}
          <div className="flex flex-col justify-center order-1 md:order-1">
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F',
                lineHeight: '1.5'
              }}
            >
              Guides your breath, clears your mind, and restores harmony.
            </p>

            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  guides breathing and meditation
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  builds healthy habits
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <p
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '18px',
                    color: '#211F1F'
                  }}
                >
                  conversational support
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: Collaboration Second, Desktop: Right Side Collaboration */}
          <div className="flex flex-col justify-center items-center text-center order-2 md:order-2">
            <p
              className="mb-4 font-bold"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '36px',
                color: '#211F1F'
              }}
            >
              In collaboration with
            </p>
            
            <div className="mb-4">
              <Image
                src="/Assets/landingpage1assets/whipsawlogo.svg"
                alt="Whipsaw logo"
                width={340}
                height={80}
                className="object-contain"
              />
            </div>
            
            <p
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '16px',
                color: '#211F1F',
                lineHeight: '1.4'
              }}
            >
              a world-renowned<br />design-to-production studio
            </p>
          </div>
        </div>
      </div>

      {/* Gradient and Black Section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          {/* Mobile: Countdown First, Desktop: Left Side Gradient */}
          <div 
            className="flex flex-col items-center justify-center order-1 md:order-1 px-5 md:px-0"
            style={{
              background: 'linear-gradient(90deg, #EEE2AD 0%, #F69678 100%)',
              paddingTop: '72px',
              paddingBottom: '72px'
            }}
          >
            {/* Launch Text */}
            <p
              className="mb-[10px]"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F'
              }}
            >
              LAUNCHING ON KICKSTARTER IN
            </p>
            
            {/* Countdown Timer */}
            <div className="flex gap-8">
              {/* Days */}
              <div className="text-center">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '50px'
                  }}
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '22px',
                    color: '#211F1F'
                  }}
                >
                  days
                </div>
              </div>
              
              {/* Hours */}
              <div className="text-center">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '50px'
                  }}
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '22px',
                    color: '#211F1F'
                  }}
                >
                  hours
                </div>
              </div>
              
              {/* Minutes */}
              <div className="text-center">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '50px'
                  }}
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '22px',
                    color: '#211F1F'
                  }}
                >
                  minutes
                </div>
              </div>
              
              {/* Seconds */}
              <div className="text-center">
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'var(--font-aeonik-mono)',
                    fontSize: '50px'
                  }}
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-aeonik)',
                    fontSize: '22px',
                    color: '#211F1F'
                  }}
                >
                  seconds
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile: Email Second, Desktop: Right Side Black */}
          <div className="flex flex-col items-center justify-center order-2 md:order-2 px-5 md:px-0" style={{ backgroundColor: '#211F1F', paddingTop: '72px', paddingBottom: '72px' }}>
            <div 
              className="text-center mb-8"
              style={{
                width: '286px',
                height: '106px'
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  marginBottom: '0px'
                }}
              >
                Get notified when we go live on<br />Kickstarter and
              </p>
              <p
                className="font-bold"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '36px',
                  color: '#F78D1E'
                }}
              >
                get $150 off.
              </p>
            </div>
            
            {/* Email Input and Button */}
            <div className="relative flex w-full max-w-md items-center">
              {/* Email Input Field */}
              <input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 px-4 py-3 text-white border-2 rounded-full focus:outline-none"
                style={{
                  backgroundColor: '#211F1F',
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  borderColor: '#F78D1E',
                  color: '#F78D1E'
                }}
              />
              
              {/* GET NOTIFIED Button - Round and Overlapping */}
              <button
                className="absolute right-0 top-0 bottom-0 px-4 rounded-full font-bold uppercase tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: '#F78D1E',
                  color: 'black'
                }}
              >
                GET NOTIFIED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section Image */}
      <div className="w-full">
        <Image
          src="/Assets/landingpage1assets/lastsectionimg.jpg"
          alt="ayon final section"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Footer */}
      <div className="w-full bg-black" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="flex flex-col items-center justify-center">
          {/* AYON Logo */}
          <div className="mb-6">
            <Image
              src="/Assets/ayonlogopngwhite.png"
              alt="ayon"
              width={135}
              height={30}
              className="object-contain"
            />
          </div>
          
          {/* Copyright Text */}
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '12px'
            }}
          >
            2025 Ayon. Built for better living. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
