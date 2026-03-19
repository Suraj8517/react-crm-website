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
      <div className="absolute inset-0 bg-[#0B1220]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[90vw] max-w-[700px] aspect-square bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      {/* Hero Content */}
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
       <div className="group relative inline-flex items-center justify-center">

  {/* Glow background */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

  {/* Main pill */}
  <div
    className="relative flex items-center gap-2 px-3 py-1 md:px-5 md:py-2
               rounded-full border border-white/20 
               bg-white/10 backdrop-blur-md 
               shadow-[0_8px_30px_rgba(124,58,237,0.25)]
               transition-all duration-300 
               hover:scale-105 hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] mb-2 md:mb-0.5"
  >

    <span className="bg-gradient-to-r from-purple-600 to-indigo-500 
                     text-white text-medium font-bold 
                     px-2 py-0.5 rounded-full shadow-sm">
      #1
    </span>

    <h5 className="text-sm md:text-sm 2xl:text-base font-medium text-white">
      Software for Coaches
    </h5>

  </div>
</div>

        <h1 className="text-[#C4B5FD] text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold drop-shadow-lg 2xl:mt-6 md:pt-2 sm:mt-3" style={{ fontFamily: "'Cormorant', serif" }}>
          Coaching, tracking, scheduling…<br/> juggling too many things at once?
        </h1>
        <p className="mt-4 text-base sm:text-md md:text-md lg:text-md 2xl:mt-8 2xl:text-md max-w-lg sm:max-w-xl md:max-w-2xl" style={{ fontFamily: "'dm sans', sans-serif" }}>
With our all-in-one platform, coaches can manage clients, track progress, and grow their business effortlessly — all from one place.        </p>
        <div className="sm:flex mt-6 gap-4 mb-20">
          <button onClick={() =>
    window.open(
      "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
      "_blank"
    )} className="md:mb-18 inline-flex items-center justify-center bg-[#5B21B6] hover:bg-purple-700 text-white text-base font-medium px-5 py-2 rounded-lg transition-colors duration-200">
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
