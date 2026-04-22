import React from 'react';
import { motion } from 'motion/react';
import logoImg from "figma:asset/cd273d0bb67ba7c7599e39daf6d3877ed218dec7.png";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#F5F7FA] flex items-center justify-center pointer-events-none overflow-hidden"
    >
      {/* Simplified background circles - No scale looping or heavy gradients */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-96 h-96 rounded-full bg-[#4CAF50]"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.03 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[#8BC34A]"
      />

      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 10 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          y: 0 
        }}
        exit={{ 
          scale: 1.2, 
          opacity: 0,
        }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut"
        }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Glow Effect - lighter blur */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-32 h-32 bg-[#4CAF50] rounded-full blur-2xl opacity-30"
        />

        {/* Logo Image */}
        <motion.img
          src={logoImg}
          alt="Webrise"
          className="relative w-28 h-28 object-contain drop-shadow-lg"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Simple Loading Indicator under logo */}
        <div className="absolute -bottom-8 flex gap-1.5 justify-center mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -3, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15
              }}
              className="w-2 h-2 rounded-full bg-[#4CAF50]"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
