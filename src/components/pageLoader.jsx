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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        @keyframes spin { to { transform: rotate(360deg); } }

        .ring-outer { animation: spin 2s linear infinite; }
        .ring-mid   { animation: spin 3s linear infinite; }
        .ring-inner { animation: spin 1.5s linear infinite; }
      `}</style>

      <AnimatePresence onExitComplete={onLoadingComplete}>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-white"
          >
            <div className="absolute w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, #a855f733 0%, transparent 70%)" }}
            />

            <div className="relative flex items-center justify-center" style={{ width: 150, height: 150 }}>

              <div
                className="ring-outer absolute inset-0 rounded-full"
                style={{ border: "3px solid transparent", borderTopColor: "#543a7e" }}
              />

              <div
                className="ring-mid absolute rounded-full"
                style={{
                  top: 5, left: 5, right: 5, bottom: 5,
                  border: "3px solid transparent",
                  borderTopColor: "#806b9d",
                }}
              />

              <div
                className="ring-inner absolute rounded-full"
                style={{
                  top: 15, left: 15, right: 15, bottom: 15,
                  border: "3px solid transparent",
                  borderTopColor: "#66567e",
                }}
              />

              <motion.img
                src={logo}
                alt="Smart Coach 360"
                className="absolute w-[40px] object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* Brand name */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg font-extrabold tracking-widest"
              style={{ fontFamily: "'Playfair Display', serif", color: "#4c1d95" }}
            >
              Smart Coach 360
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}