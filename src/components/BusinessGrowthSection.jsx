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
    image: slide1,
  },
  {
    title: "Track member growth and achievements instantly.",
    content:
      "Monitor your members’ growth and milestones effortlessly. Our clear dashboards make performance tracking simple and transparent.",
    image: slide2,
  },
  {
    title: "Simplify billing and communication with built-in tools.",
    content:
      "Effortlessly manage billing, calls, and subscriptions—all in one platform designed for smooth business operations.",
    image: slide3,
  },
];

export default function GrowthSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [manual, setManual] = useState(false);

  // ✅ Autoplay logic (always starts from top)
  useEffect(() => {
    if (manual) return;

    const duration = 5000; // 5s per section
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
    <div className="flex flex-col md:flex-row items-center justify-between bg-purple-950 text-white py-20 px-6 md:px-20 mt-24 relative overflow-hidden">
      {/* Left Side */}
      <div className="md:w-1/2 relative">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Scale business growth with every customer conversation
        </h2>
        <p className="text-gray-400 mb-10 text-lg 2xl:text-xl">
          Streamline your customer journey by centralizing every interaction.
          Stay organized, responsive, and efficient—no matter how many customers
          you have.
        </p>

        {/*  Progress Line Container */}
        <div className="relative pl-6 border-l border-gray-700">
          {/*  Glowing progress line */}
          <motion.div
            className="absolute left-[-2px] w-[3px] rounded-full bg-gradient-to-b from-blue-400 to-purple-500 shadow-[0_0_12px_4px_rgba(99,102,241,0.5)]"
            style={{
              top: getLineTop(),
              height: getProgressHeight(),
              transition: "height 0.15s linear, top 0.3s ease",
              boxShadow:
                "0 0 15px rgba(147, 197, 253, 0.7), 0 0 25px rgba(168, 85, 247, 0.6)",
            }}
          ></motion.div>

          {/*  Soft blur glow behind main line */}
          <motion.div
            className="absolute left-[-2px] w-[6px] rounded-full bg-gradient-to-b from-blue-400/30 to-purple-500/30 blur-md"
            style={{
              top: getLineTop(),
              height: getProgressHeight(),
              transition: "height 0.15s linear, top 0.3s ease",
            }}
          ></motion.div>

          {/*  Titles */}
          {sections.map((sec, i) => (
            <div
              key={i}
              className={`mb-6 cursor-pointer relative z-10 transition-all ${
                active === i
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => handleClick(i)}
            >
              <h4 className="font-semibold text-xl 2xl:text-3xl">{sec.title}</h4>
              {active === i && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 mt-2 text-sm 2xl:text-xl"
                >
                  {sec.content}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={sections[active].image}
            src={sections[active].image}
            alt={sections[active].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-[90%] rounded-3xl shadow-lg"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
