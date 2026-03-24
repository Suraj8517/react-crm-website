import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Coach 360 logo.svg";

export default function PageLoader({ onLoadingComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 18;
      });
    }, 120);

    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes spin-outer { to { transform: rotate(360deg); } }
        @keyframes spin-mid   { to { transform: rotate(-360deg); } }
        @keyframes spin-inner { to { transform: rotate(360deg); } }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%       { transform: scale(1.08); opacity: 0.15; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .ring-outer { animation: spin-outer 2s linear infinite; }
        .ring-mid   { animation: spin-mid 3s linear infinite; }
        .ring-inner { animation: spin-inner 1.5s linear infinite; }
        .pulse-ring { animation: pulse-ring 2.4s ease-in-out infinite; }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #6b21a8 0%, #9333ea 30%, #c084fc 50%, #9333ea 70%, #6b21a8 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .progress-bar {
          background: linear-gradient(90deg, #7c3aed, #a855f7, #c084fc);
          background-size: 200% 100%;
          animation: shimmer 1.5s linear infinite;
        }
      `}</style>

      <AnimatePresence onExitComplete={onLoadingComplete}>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div style={{
                position: "absolute", top: "15%", left: "20%",
                width: 380, height: 380, borderRadius: "50%",
                background: "radial-gradient(circle, #ede9fe 0%, transparent 70%)",
                filter: "blur(60px)", opacity: 0.8
              }} />
              <div style={{
                position: "absolute", bottom: "20%", right: "18%",
                width: 280, height: 280, borderRadius: "50%",
                background: "radial-gradient(circle, #f3e8ff 0%, transparent 70%)",
                filter: "blur(50px)", opacity: 0.6
              }} />
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, #faf5ff 0%, transparent 65%)",
                filter: "blur(40px)", opacity: 0.5
              }} />
            </div>

            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }} />

            <div className="relative flex flex-col items-center gap-10">

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative flex items-center justify-center"
                style={{ width: 150, height: 150 }}
              >
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

                <motion.div
                  className="relative z-10 flex items-center justify-center rounded-full"
                  style={{
                    width: 64, height: 64,
                    background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
                    boxShadow: "0 0 0 1px rgba(167,139,250,0.3), 0 8px 32px rgba(124,58,237,0.12), inset 0 1px 0 rgba(255,255,255,0.8)"
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <img src={logo} alt="SmartCoach360" className="w-8 h-8 object-contain" />
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1.5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-baseline gap-1">
                  <span
                    className="shimmer-text"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(26px, 4vw, 36px)",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      lineHeight: 1,
                    }}
                  >
                    SmartCoach
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(26px, 4vw, 36px)",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      lineHeight: 1,
                      color: "#c084fc",
                    }}
                  >
                    360
                  </span>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    letterSpacing: "0.22em",
                    color: "#a78bfa",
                    textTransform: "uppercase",
                  }}
                >
                  #1 Software for Coaches
                </motion.p>
              </motion.div>

              

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}