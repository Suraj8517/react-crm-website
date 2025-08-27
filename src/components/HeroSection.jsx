import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import herobg from "../assets/background-img.jpg";
import features from "../data/features";
import HeroCarouselDesktop from "./HeroCarouselDesktop";
import HeroCarouselMobile from "./HeroCarouselMobile";

export default function HeroSection() {
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
    <main className="relative w-full h-[70vh] sm:h-[80vh] md:h-[60vh] lg:h-screen">
      <img src={herobg} alt="hero background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-purple-600/80"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
          Modern HR & People Ops
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg sm:max-w-xl md:max-w-2xl">
          Automate your operations, empower your team, and scale faster with confidence.
        </p>
        <div className="sm:flex mt-6 gap-4">
          <button className="bg-white px-3 py-2 rounded-full font-semibold text-purple-600 hover:bg-purple-600 hover:text-white border border-white transition">
            Get Started
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
