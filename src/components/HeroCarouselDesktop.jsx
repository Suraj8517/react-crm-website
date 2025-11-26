import React from "react";
import { motion } from "framer-motion";
import features from "../data/features";

export default function HeroCarouselDesktop({ heroImage, setHeroImage, isPaused, setIsPaused }) {
  return (
    <div className="
  hidden lg:block absolute 
  left-1/2 transform -translate-x-1/2 translate-y-3/4
  bottom-10 xl:bottom-16 2xl:bottom-24
  w-[80%] xl:w-[65%] 
  z-20
">
  <motion.div className="w-full aspect-video rounded-3xl shadow-xl overflow-hidden bg-white border-8 border-transparent">
    <img 
      src={features[heroImage].img} 
      alt={features[heroImage].title} 
      className="w-full h-full object-contain" 
    />
  </motion.div>

  <div className="
    absolute -bottom-10 -right-10
    grid grid-cols-3 gap-3 p-4 
    bg-purple-100 rounded-3xl shadow-lg
  ">
    {features.slice(0, 9).map((f, i) => (
      <button
        key={i}
        onMouseEnter={() => { setHeroImage(i); setIsPaused(true); }}
        onMouseLeave={() => setIsPaused(false)}
        className={`flex flex-col items-center justify-center 
          min-w-[5rem] h-20 px-2 rounded-2xl border text-sm font-medium 
          transition hover:scale-105
          ${
            heroImage === i 
            ? 'bg-white text-[#2E005C] border-[#2E005C]' 
            : 'bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white border-white'
          }`}
      >
        <span className="text-2xl mb-1">{f.icon}</span>
        <span className="text-xs text-center break-words leading-tight">
          {f.shortTitle}
        </span>
      </button>
    ))}
  </div>
</div>

  );
}
