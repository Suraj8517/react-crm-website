import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Coach 360 logo.png"

export default function PageLoader({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 800);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            filter: "blur(20px)"
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1]
          }}
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-black z-[9999] overflow-hidden"
        >
      
      {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 3s linear infinite'
        }} />
      </motion.div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)); }
          50% { filter: drop-shadow(0 0 40px rgba(168, 85, 247, 1)); }
        }
      `}</style>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        exit={{ 
          y: -100, 
          opacity: 0,
          scale: 0.5,
          rotateX: 90
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        
        {/* Hexagonal Container with Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
         

          {/* Inner Hexagon */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(168, 85, 247, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 bg-gradient-to-br from-purple-300 to-white rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            {/* Shine Effect */}
            <motion.div
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 skew-x-12"
            />
            
            {/* CC Letter */}
<span className="z-10">
  <img
    src={logo}
    alt="smart coach360"
    className="w-32 h-32 object-contain"
  />
</span>
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent tracking-wider">
            SmartCoach360
          </h1>
        </motion.div>

        {/* Futuristic Loading Bar Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative w-64 h-2 bg-purple-950 rounded-full overflow-hidden border border-purple-700/50"
        >
          {/* Background Pulse */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-purple-700/30"
          />
          
          {/* Main Loading Bar */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-full w-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            style={{
              filter: 'blur(4px)',
            }}
          />
          
          {/* Solid Progress Bar */}
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 text-purple-300 text-sm tracking-widest uppercase"
        >
          Built for coaches. Designed for growth.
        </motion.div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}