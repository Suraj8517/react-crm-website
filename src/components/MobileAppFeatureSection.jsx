import React, { useState, useEffect } from "react";
import {
  ScanHeart,
  ChartNoAxesCombined,
  Video,
  Dumbbell,
  Apple,
  LayoutDashboard,
  ClipboardPlus,
  HandHeart,
} from "lucide-react";

import dashboard from "../assets/app-images/dashboard.webp";
import progress from "../assets/app-images/progress tracking.webp";
import live from "../assets/app-images/live session.webp";
import nutrition from "../assets/app-images/nutrition tracker.webp";
import female from "../assets/app-images/Female Tracker.webp";
import community from "../assets/app-images/community.webp";
import workout from "../assets/app-images/workout tracker.webp";
import health from "../assets/app-images/health tracker.webp";

export default function MobileAppSection() {
  const leftFeatures = [
    { icon: ChartNoAxesCombined, title: "Progress Tracking", image: progress },
    { icon: Video, title: "Live Sessions", image: live },
    { icon: Dumbbell, title: "Workout Tracker", image: workout },
    { icon: Apple, title: "Nutrition Tracker", image: nutrition },
  ];

  const rightFeatures = [
    { icon: LayoutDashboard, title: "Simple Dashboard", image: dashboard },
    { icon: ScanHeart, title: "Female Tracker", image: female },
    { icon: HandHeart, title: "Community Support", image: community },
    { icon: ClipboardPlus, title: "Health tracker", image: health },
  ];

  const allFeatures = [...leftFeatures, ...rightFeatures];

  const [appImage, setappImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setappImage((prev) => (prev + 1) % allFeatures.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, allFeatures.length]);

  const formatTitle = (title) => {
    const words = title.split(" ");
    if (words.length <= 2) return title;
    return `${words[0]} ${words[1]}\n${words.slice(2).join(" ")}`;
  };

  return (
    <div className="bg-gradient-to-b from-[#4B0082] to-[#2E005C] mt-16 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Delight your customers with 100%<br /> digital service!
          </h1>
          <p className="text-purple-200 text-lg">
            Get access to mobile app that you can use as your own or offer a
            top-notch customer experience and build loyalty.
          </p>
        </div>

        {/* ==================== DESKTOP ==================== */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-8">
          {/* Left */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <button
                  key={feature.title}
                  onClick={() => {
                    setappImage(index);
                    setIsPaused(true);
                  }}
                  className={`w-56 bg-[#6E0ACE] hover:bg-[#8A2BE2]
                  transition-all rounded-2xl p-5 flex items-center gap-5
                  text-white shadow-xl text-left
                  ${index === 1 || index === 2 ? "self-start" : "self-end"}
                  ${appImage === index
    ? "bg-[#8A2BE2] ring-2 ring-white scale-[1.02]"
    : "bg-[#6E0ACE] hover:bg-[#8A2BE2]"
  }`}
                >
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <Icon className="w-7 h-7 text-[#6E0ACE]" />
                  </div>

                  <span className="font-semibold text-lg whitespace-pre-line leading-tight">
                    {formatTitle(feature.title)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={allFeatures[appImage].image}
              alt="Mobile App Interface"
              className="w-72 h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const globalIndex = index + leftFeatures.length;

              return (
                <button
                  key={feature.title}
                  onClick={() => {
                    setappImage(globalIndex);
                    setIsPaused(true);
                  }}
                  className={`w-56 bg-[#6E0ACE] hover:bg-[#8A2BE2]
                  transition-all rounded-2xl p-5 flex items-center gap-5
                  text-white shadow-xl text-left
                  ${index === 0 || index === 3 ? "self-start" : "self-end"}
                  ${appImage === globalIndex
    ? "bg-[#8A2BE2] ring-2 ring-white scale-[1.02]"
    : "bg-[#6E0ACE] hover:bg-[#8A2BE2]"
  }`}
                >
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <Icon className="w-7 h-7 text-[#6E0ACE]" />
                  </div>

                  <span className="font-semibold text-lg whitespace-pre-line leading-tight">
                    {formatTitle(feature.title)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==================== MOBILE ==================== */}
<div className="lg:hidden w-full flex flex-col items-center gap-4 mt-4">

  {/* Mobile Image */}
  <img
    src={allFeatures[appImage].image}
    alt="Mobile App"
    className="w-56 sm:w-64 drop-shadow-xl"
  />

  {/* Mobile Features Grid */}
  <div className="grid grid-cols-2 gap-3 w-full max-w-md mt-2">
    {allFeatures.map((feature, index) => {
      const Icon = feature.icon;

      return (
        <button
          key={feature.title}
          onClick={() => {
            setappImage(index);
            setIsPaused(true);
          }}
          className="bg-[#6E0ACE] hover:bg-[#8A2BE2]
          transition-all rounded-xl p-3 flex items-center gap-3
          text-white shadow-md text-left"
        >
          <div className="bg-white p-2 rounded-full">
            <Icon className="w-5 h-5 text-[#6E0ACE]" />
          </div>

          <span className="text-sm font-medium leading-tight">
            {formatTitle(feature.title)}
          </span>
        </button>
      );
    })}
  </div>
</div>

      </div>
    </div>
  );
}
