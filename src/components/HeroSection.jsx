import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import herobg from "../assets/background-img.jpg";
import features from "../data/features";
import HeroCarouselDesktop from "./HeroCarouselDesktop";
import HeroCarouselMobile from "./HeroCarouselMobile";

export default function HeroSection({ onOpenForm }) {
  const [heroImage, setHeroImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setHeroImage((prev) => (prev + 1) % features.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="relative w-full h-[70vh] sm:h-[80vh] md:h-[60vh] lg:h-screen xl:h-[100vh]">
      <img src={herobg} alt="hero background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#7025a5] to-[#2E005C]"></div>

      {/* Hero Content */}
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
        <div
  className="border border-amber-50 rounded-3xl py-1 px-4 
             flex items-center justify-center 
             animate-fadeInUp 
             transition-all duration-500 
             hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
>
  <h5 className="text-sm font-medium text-white animate-pulse 2xl:text-2xl">
    <span className="bg-purple-700 p-0.5 rounded-sm font-bold text-sm 2xl:text-2xl">#1</span> Software for Coaches 🏋🏻
  </h5>
</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold drop-shadow-lg 2xl:mt-6 mt-4 sm:mt-3">
          Coaching, tracking, scheduling…<br/> juggling too many things at once?
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-xl 2xl:mt-8 2xl:text-2xl max-w-lg sm:max-w-xl md:max-w-2xl">
With our all-in-one platform, coaches can manage clients, track progress, and grow their business effortlessly — all from one place.        </p>
        <div className="sm:flex mt-6 gap-4 mb-20">
          <button onClick={onOpenForm} className="md:mb-18 inline-flex items-center justify-center bg-purple-800 hover:bg-purple-700 text-white text-base font-medium px-5 py-2 rounded-lg transition-colors duration-200">
            Book a Demo
          </button>
        </div>
      </div>

      {/* Desktop Carousel */}
      <HeroCarouselDesktop
        heroImage={heroImage}
        setHeroImage={setHeroImage}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />

      {/* Mobile Carousel */}
      <HeroCarouselMobile
        heroImage={heroImage}
        setHeroImage={setHeroImage}
        setIsPaused={setIsPaused}
      />
    </main>
  );
}
