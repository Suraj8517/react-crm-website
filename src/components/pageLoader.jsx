import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Coach 360 logo.svg";

export default function PageLoader({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onLoadingComplete}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-white"
        >
          {/* Glow */}
          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />

          {/* Loader */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-[140px] h-[140px] rounded-full border-[4px] border-purple-200 border-t-purple-600"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
            />

            <motion.img
              src={logo}
              alt="Smart Coach 360"
              className="absolute w-[50px] object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg font-extrabold tracking-widest text-purple-900" 
            style={{ fontFamily: "'DM Sans', san-serif" }}
          >
            Smart Coach 360
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}