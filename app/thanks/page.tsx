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

      {/* Background Image Section */}
      <div 
        className="w-full min-h-screen flex items-center justify-center relative"
      >
        {/* Background Image */}
        <Image
          src="/Assets/landingpagenew/ayonthankspage.png"
          alt="Ayon Thanks Page Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="flex flex-col items-center justify-center h-full min-h-screen relative z-10">
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
