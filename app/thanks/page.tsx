"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Thanks() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#211F1F' }}>
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

      {/* Background Section */}
      <div 
        className="w-full min-h-screen flex items-center justify-center relative"
        style={{ backgroundColor: '#F4F1EE' }}
      >
        <div className="flex items-center justify-center h-full min-h-screen relative z-10">
          {/* Main Content Container - Vertical Flex */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            style={{ width: '360px' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Thank You Tick Icon */}
            <motion.div
              style={{ marginBottom: '20px' }}
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
            
            {/* Thank You Heading */}
            <h1 
              className="text-[40px] font-bold"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                marginBottom: '40px'
              }}
            >
              Thank you!
            </h1>
            
            {/* Thank You Text */}
            <p 
              className="text-[18px]"
              style={{
                fontFamily: 'var(--font-aeonik)',
                color: '#211F1F',
                marginBottom: '120px'
              }}
            >
              To claim your <span className="font-bold">$150 discount</span><br />head to your inbox right now.
            </p>
            
            {/* AYON Logo */}
            <motion.div 
              className="flex justify-center"
              style={{ marginBottom: '20px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/Assets/ayonlogopngblack.png"
                alt="ayon"
                width={135}
                height={30}
                className="object-contain"
              />
            </motion.div>
            
            {/* Launching Soon Text */}
            <motion.p
              className="text-center"
              style={{
                fontFamily: 'var(--font-aeonik-mono)',
                fontSize: '14px',
                color: '#211F1F',
                marginBottom: '10px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              Launching soon on
            </motion.p>
            
            {/* Kickstarter Logo */}
            <motion.div 
              className="flex justify-center"
              style={{ marginBottom: '40px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <Image
                src="/Assets/kickstarterblack.svg"
                alt="Kickstarter"
                width={220}
                height={29}
                className="object-contain"
              />
            </motion.div>
            
            {/* Copyright Text */}
            <motion.p
              className="text-center whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '12px',
                color: '#211F1F'
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
