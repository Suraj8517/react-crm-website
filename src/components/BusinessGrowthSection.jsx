import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
 import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
const sections = [
  {
    title: "Transform inquiries into loyal members—fast and hassle-free.",
    content:
      "Turn every inquiry into an opportunity. Engage prospects efficiently, nurture leads, and close memberships faster, ensuring no potential customer slips through the cracks.",
    image: slide1
  },
  {
    title: "Track member growth and achievements instantly.",
    content:
      "Monitor your members' growth and milestones effortlessly. Our clear dashboards make performance tracking simple and transparent.",
    image: slide2
  },
  {
    title: "Simplify billing and communication with built-in tools.",
    content:
      "Effortlessly manage billing, calls, and subscriptions—all in one platform designed for smooth business operations.",
    image: slide3
  },
];
 
export default function GrowthSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [manual, setManual] = useState(false);
 
  useEffect(() => {
    if (manual) return;
    const duration = 5000;
    const interval = 50;
    let elapsed = 0;
    setProgress(0);
 
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);
      if (elapsed >= duration) {
        clearInterval(timer);
        setActive((prev) => (prev + 1) % sections.length);
      }
    }, interval);
 
    return () => clearInterval(timer);
  }, [active, manual]);
 
  const handleClick = (index) => {
    setActive(index);
    setManual(true);
    setProgress(50);
  };
 
  const getProgressHeight = () => (manual ? "50%" : `${progress}%`);
 
  const getLineTop = () => {
    if (!manual) return "0%";
    if (active === 0) return "0%";
    if (active === 1) return "33.33%";
    return "66.66%";
  };
 
  return (
    <div className="relative h-280 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white py-20 px-6 md:px-20 mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
 
      {/* Left Side */}
      <div className="md:w-1/2 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Scale business growth with every customer conversation
          </h2>
          <p className="text-gray-300 mb-10 text-lg 2xl:text-xl leading-relaxed">
            Streamline your customer journey by centralizing every interaction.
            Stay organized, responsive, and efficient—no matter how many
            customers you have.
          </p>
        </motion.div>
 
        {/* Progress Line Container */}
        <div className="relative pl-8 border-l-2 border-gray-700/50">
          {/* Glowing progress line */}
          <motion.div
            className="absolute left-[-3px] w-[5px] rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600"
            style={{
              top: getLineTop(),
              height: getProgressHeight(),
              transition: "height 0.15s linear, top 0.3s ease",
              boxShadow:
                "0 0 20px rgba(56, 189, 248, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)",
            }}
          ></motion.div>
 
          {/* Enhanced blur glow */}
          <motion.div
            className="absolute left-[-6px] w-[12px] rounded-full bg-gradient-to-b from-cyan-400/40 via-blue-500/40 to-purple-600/40 blur-xl"
            style={{
              top: getLineTop(),
              height: getProgressHeight(),
              transition: "height 0.15s linear, top 0.3s ease",
            }}
          ></motion.div>
 
          {/* Titles */}
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              className={`mb-8 cursor-pointer relative z-10 transition-all duration-300 group ${
                active === i ? "text-white" : "text-gray-500"
              }`}
              onClick={() => handleClick(i)}
              whileHover={{ x: 4 }}
            >
              {/* Number indicator */}
              <div className={`flex items-start gap-4 ${active === i ? 'mb-3' : ''}`}>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    active === i
                      ? "bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-purple-500/50"
                      : "bg-gray-700/50 text-gray-500 group-hover:bg-gray-600/50"
                  }`}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold text-xl 2xl:text-3xl transition-all duration-300 ${
                      active === i
                        ? "text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"
                        : "group-hover:text-gray-300"
                    }`}
                  >
                    {sec.title}
                  </h4>
                  <AnimatePresence mode="wait">
                    {active === i && (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-gray-300 mt-3 text-sm 2xl:text-xl leading-relaxed"
                      >
                        {sec.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
 
      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative z-10">
        <div className="relative">
          {/* Decorative glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl transform scale-105"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[active].image}
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <img
                src={sections[active].image}
                alt={sections[active].title}
                className="w-[90%] mx-auto rounded-3xl shadow-2xl shadow-purple-900/50 border border-purple-500/20"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-3xl w-[90%] mx-auto"></div>
            </motion.div>
          </AnimatePresence>
 
          {/* Floating indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2"
          >
            {sections.map((_, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-500"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
 