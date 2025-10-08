"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThankYou() {
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

      {/* Gradient Section */}
      <div 
        className="w-full min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(0deg, #F69678 0%, #EEE2AD 100%)'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full min-h-screen relative">
          {/* Thank You Content - Dead Center */}
          <motion.div 
            className="text-center"
            style={{ width: '360px' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/Assets/landingpage1assets/thankyoutick.png"
                alt="Thank you tick"
                width={50}
                height={50}
                className="mx-auto"
              />
            </motion.div>
            
            <h1 
              className="text-[40px] font-bold mb-6"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: 'white'
              }}
            >
              Thank you!
            </h1>
            <p 
              className="text-[18px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: 'white'
              }}
            >
              To claim your <span className="font-bold">$150 discount</span><br />head to your inbox right now.
            </p>
          </motion.div>

          {/* Footer - Almost at the end of the section */}
          <motion.div 
            className="text-center absolute left-1/2 transform -translate-x-1/2"
            style={{ bottom: '80px' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* AYON Logo */}
            <motion.div 
              className="flex justify-center"
              style={{ marginBottom: '15px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
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
              className="text-white text-center whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '12px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              2025 Ayon. Built for better living. All rights reserved.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
