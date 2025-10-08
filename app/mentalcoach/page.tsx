"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MentalCoach() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  // Animation for percentage counter
  useEffect(() => {
    const animatePercentage = () => {
      const targetPercentage = 86;
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = targetPercentage / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const newPercentage = Math.min(Math.floor(increment * currentStep), targetPercentage);
        setAnimatedPercentage(newPercentage);

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedPercentage(targetPercentage);
        }
      }, stepDuration);
    };

    // Start animation when component mounts
    const timer = setTimeout(animatePercentage, 1000); // Start after 1 second
    return () => clearTimeout(timer);
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
            src="/Assets/landingpage1assets/lastsectionimg.png"
            alt="ayon personal health coach background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full h-full">
          {/* Centered Logo and Subtitle Group */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center text-center top-[70px] md:top-1/2 md:-translate-y-1/2"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* AYON Logo */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/Assets/ayonlogopngwhite.png"
                alt="ayon"
                width={162}
                height={36}
                className="object-contain md:w-[272px] md:h-[61px]"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              className="text-white font-bold tracking-wide text-[30px] leading-[30px] md:text-[40px] md:leading-[42px] md:w-[437px] md:h-[42px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              personal health<br className="md:hidden" />coach
            </motion.p>
          </motion.div>

          {/* CTA Button - Positioned 40px from bottom on mobile, centered on desktop */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[40px] md:top-1/2 md:mt-[182px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <button 
              className="bg-white text-black font-medium uppercase tracking-wider transition-all duration-300 border border-black hover:scale-105"
              style={{ 
                width: '269px', 
                height: '75px', 
                borderRadius: '37.5px',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: 'var(--font-aeonik)',
                boxShadow: '0 0 0 0 rgba(238, 228, 172, 0.4), 0 0 0 0 rgba(246, 152, 121, 0.4)',
                transition: 'all 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.boxShadow = '0 0 20px 8px rgba(238, 228, 172, 0.3), 0 0 40px 16px rgba(246, 152, 121, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.boxShadow = '0 0 0 0 rgba(238, 228, 172, 0.4), 0 0 0 0 rgba(246, 152, 121, 0.4)';
              }}
            >
              NOTIFY ME AT LAUNCH
            </button>
          </motion.div>
        </div>
      </div>

      {/* New Section */}
      <motion.div 
        className="w-full bg-white flex items-center justify-center" 
        style={{ paddingTop: '72px', paddingBottom: '72px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-[680px] h-[350px] flex items-center justify-center relative">
          {/* Background Eclipse Group */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/Assets/landingpage1assets/eclipsegroup.svg"
              alt="eclipse background"
              width={683}
              height={350}
              className="absolute opacity-100"
            />
          </motion.div>
          
          {/* Text */}
          <motion.h2 
            className="text-center font-bold leading-tight relative z-10"
            style={{
              fontFamily: 'var(--font-aeonik)',
              color: '#211F1F',
              fontSize: '40px',
              width: '381px',
              height: '84px',
              lineHeight: '42px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Hello, I am ayon, your stress relief guide.
          </motion.h2>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="w-full flex items-center justify-center md:px-0" 
        style={{ backgroundColor: '#211F1F', paddingTop: '43px', paddingBottom: '43px', paddingLeft: '60px', paddingRight: '60px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 86% Stat */}
          <motion.div 
            className="font-bold mb-2 text-[40px] md:text-[60px]"
            style={{
              fontFamily: 'var(--font-aeonik)',
              color: '#F78D1E'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {animatedPercentage}%
          </motion.div>
          
          {/* Subtitle */}
          <motion.div 
            className="font-medium text-[18px] md:text-[22px]"
            style={{
              fontFamily: 'var(--font-aeonik-mono)',
              color: '#F78D1E'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            of users report building lasting healthy habits
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <div className="w-full">
        <Image
          src="/Assets/landingpage1assets/ayonimage1.png"
          alt="ayon product image"
          width={1200}
          height={800}
          className="w-full h-[340px] md:h-[800px] object-cover"
        />
      </div>

      {/* Features Section */}
      <motion.div 
        className="w-full bg-white px-5 md:px-[120px]" 
        style={{ paddingTop: '72px', paddingBottom: '200px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-[100px] min-h-[350px]">
          {/* Text First */}
          <motion.div 
            className="flex flex-col justify-center order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="mb-6 text-center"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F',
                lineHeight: '1.5'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Next-generation health device with built-in AI that guides your workouts and builds inner calm with guided meditation.
            </motion.p>

          </motion.div>

          {/* Eclipse Second */}
          <motion.div 
            className="relative flex items-center justify-center order-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/Assets/landingpage1assets/eclipsegroup.svg"
              alt="eclipse background"
              width={683}
              height={350}
              className="absolute opacity-100 object-contain w-[683px] h-[350px]"
            />
            <motion.h2
              className="relative z-10 text-center font-bold text-[35px] md:text-[48px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                lineHeight: '1.2'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Bring back your<br />inner calm
            </motion.h2>
          </motion.div>
        </div>
      </motion.div>

      {/* GIF Section 3 */}
      <motion.div 
        className="w-full relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
            <motion.h2
              className="font-bold text-[40px] md:text-[60px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: 'white'
              }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              MIND.
            </motion.h2>
          </div>
        </div>
      </motion.div>


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
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
          {/* Mobile: Countdown First, Desktop: Left Side Gradient */}
          <motion.div 
            className="flex flex-col items-center justify-center order-1 md:order-1 px-5 md:px-0"
            style={{
              background: 'linear-gradient(90deg, #EEE2AD 0%, #F69678 100%)',
              paddingTop: '72px',
              paddingBottom: '72px'
            }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Launch Text */}
            <motion.p
              className="mb-[10px]"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '24px',
                color: '#211F1F'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              LAUNCHING ON KICKSTARTER IN
            </motion.p>
            
            {/* Countdown Timer */}
            <motion.div 
              className="flex gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
            </motion.div>
          </motion.div>
          
          {/* Mobile: Email Second, Desktop: Right Side Black */}
          <motion.div 
            className="flex flex-col items-center justify-center order-2 md:order-2 px-5 md:px-0" 
            style={{ backgroundColor: '#211F1F', paddingTop: '72px', paddingBottom: '72px' }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="text-center mb-8"
              style={{
                width: '286px',
                height: '106px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
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
            </motion.div>
            
            {/* Email Input and Button */}
            <motion.div 
              className="relative flex w-full max-w-md items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
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
                className="absolute right-0 top-0 bottom-0 px-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap hover:scale-105"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '12px',
                  fontWeight: '700',
                  backgroundColor: '#F78D1E',
                  color: 'black',
                  boxShadow: '0 0 0 0 rgba(246, 152, 121, 0.4), 0 0 0 0 rgba(238, 228, 172, 0.4)',
                  transition: 'all 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 15px 6px rgba(246, 152, 121, 0.3), 0 0 30px 12px rgba(238, 228, 172, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.boxShadow = '0 0 0 0 rgba(246, 152, 121, 0.4), 0 0 0 0 rgba(238, 228, 172, 0.4)';
                }}
              >
                GET NOTIFIED
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Last Section Image */}
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/Assets/landingpage1assets/lastsectionimg.png"
          alt="ayon final section"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="w-full bg-black" 
        style={{ paddingTop: '100px', paddingBottom: '100px' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center">
          {/* AYON Logo */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/Assets/ayonlogopngwhite.png"
              alt="ayon"
              width={135}
              height={30}
              className="object-contain"
            />
          </motion.div>
          
          {/* Copyright Text */}
          <motion.p
            className="text-white text-center"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '12px'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            2025 Ayon. Built for better living. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
