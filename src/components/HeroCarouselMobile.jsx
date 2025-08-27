import React from "react";
import { motion } from "framer-motion";
import features from "../data/features";

export default function HeroCarouselMobile({ heroImage, setHeroImage, setIsPaused }) {
  return (
    <div className="relative -mt-24 md:-mt-36 lg:hidden z-30 px-4">
      <div className="w-full h-44 md:h-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
        <motion.img
          key={heroImage}
          src={features[heroImage].img}
          alt={features[heroImage].title}
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        {features.slice(0, 9).map((f, i) => (
          <button
            key={i}
            onClick={() => { setHeroImage(i); setIsPaused(true); }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium whitespace-nowrap transition
              ${heroImage === i ? 'bg-white text-purple-600 border-purple-600' : 'bg-purple-600 text-white border-white'}`}>
            <span className="text-xl">{f.icon}</span>
            <span className="text-sm sm:text-base">{f.shortTitle}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
