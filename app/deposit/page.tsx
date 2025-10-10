"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Deposit() {
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
    <div className="min-h-screen bg-white" style={{ overflowX: 'hidden' }}>
      {/* Top Banner */}
      <div 
        className="w-full flex items-center justify-center"
        style={{ 
          backgroundColor: '#211F1F',
          height: '100px'
        }}
      >
        {/* Countdown Timer */}
        <div className="flex gap-8">
            {/* Days */}
            <div className="text-center">
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-aeonik-mono)',
                  fontSize: '46px',
                  lineHeight: '1'
                }}
              >
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  color: '#F78D1E'
                }}
              >
                days
              </div>
            </div>
            
            {/* Hours */}
            <div className="text-center">
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-aeonik-mono)',
                  fontSize: '46px',
                  lineHeight: '1'
                }}
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  color: '#F78D1E'
                }}
              >
                hours
              </div>
            </div>
            
            {/* Minutes */}
            <div className="text-center">
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-aeonik-mono)',
                  fontSize: '46px',
                  lineHeight: '1'
                }}
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  color: '#F78D1E'
                }}
              >
                minutes
              </div>
            </div>
            
            {/* Seconds */}
            <div className="text-center">
              <div
                className="text-white mb-1"
                style={{
                  fontFamily: 'var(--font-aeonik-mono)',
                  fontSize: '46px',
                  lineHeight: '1'
                }}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '18px',
                  color: '#F78D1E'
                }}
              >
                seconds
              </div>
            </div>
        </div>
      </div>

      {/* GIF Section */}
      <div className="w-full">
        <Image
          src="/Assets/landingpage1assets/herosectiongif.png"
          alt="ayon product"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Gradient Section */}
      <div 
        className="w-full grid grid-cols-1 md:grid-cols-2"
        style={{ 
          minHeight: '450px', 
          marginBottom: '0',
          background: 'radial-gradient(circle at right, #F69678 0%, #EEE2AD 100%)'
        }}
      >
        {/* Left Grid */}
        <div 
          className="w-full h-full flex flex-col justify-center px-5 md:px-[120px]"
          style={{ 
            paddingTop: '60px',
            paddingBottom: '80px'
          }}
        >
          <div
            className="mb-6"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '24px',
              color: '#211F1F',
              lineHeight: '1.5'
            }}
          >
            A small <span className="font-bold">$20 deposit</span> today gets you:
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-800 pb-6">
              <p
                style={{
                  fontFamily: 'var(--font-aeonik-mono)',
                  fontSize: '18px',
                  color: '#211F1F'
                }}
              >
                Guaranteed availability via Secret Link
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
                The lowest price we'll ever offer
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
                Free worldwide shipping
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
                First batch delivery & VIP updates
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
                Early access to Ayon app beta
              </p>
            </div>
          </div>
        </div>

        {/* Right Grid */}
        <div 
          className="w-full h-full flex flex-col justify-center items-center px-5 md:px-[120px]"
          style={{ 
            paddingTop: '36px',
            paddingBottom: '48px'
          }}
        >
          <div
            className="mb-5 text-center"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '13px',
              color: '#211F1F',
              lineHeight: '1.5'
            }}
          >
            Due to high demand, we've opened a limited-time window to secure your Ayon device one week before the campaign begins, with extra benefits. A small $20 deposit today guarantees you exclusive perks at launch.
          </div>

          <Link href="/checkout">
            <button 
              className="bg-white text-black font-medium uppercase tracking-wider transition-all duration-300 border border-black hover:scale-105 mb-4"
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
              SECURE YOUR BENEFITS
            </button>
          </Link>

          <div
            className="text-center"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '13px',
              color: '#211F1F'
            }}
          >
            100% refundable
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.div 
        className="w-full" 
        style={{ 
          backgroundColor: '#211F1F',
          paddingTop: '50px', 
          paddingBottom: '50px',
          marginTop: '0'
        }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center">
          {/* Support Contact Section */}
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-white mb-4 font-bold"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '25px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Support contact
            </motion.p>
            
            <motion.p
              className="text-white mb-2"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '18px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              hello@ayon.fit
            </motion.p>
            
            <motion.a
              href="#"
              className="text-white underline"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '18px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Terms and conditions
            </motion.a>
          </motion.div>

          {/* AYON Logo */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            2025 Ayon. Built for better living. All rights reserved.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
