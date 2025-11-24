import React from "react";
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
import mobileImg from "../assets/mockup.webp";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileAppSection() {
  const leftFeatures = [
    { icon: ChartNoAxesCombined, title: "Progress Tracking" },
    { icon: Video, title: "Live Sessions" },
    { icon: Dumbbell, title: "Workout Plans" },
    { icon: Apple, title: "Nutrition Tracker" },
  ];

  const rightFeatures = [
    { icon: ScanHeart, title: "Daily Activity Monitoring" },
    { icon: LayoutDashboard, title: "Simple Dashboards" },
    { icon: ClipboardPlus, title: "In-App Lab Reports" },
    { icon: HandHeart, title: "Community Support" },
  ];

  const allFeatures = [...leftFeatures, ...rightFeatures];

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

        {/* ==================== DESKTOP LAYOUT ==================== */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-8">
          
          {/* Left Column (Zig-Zag) */}
          <div className="flex flex-col gap-10">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`w-fit bg-[#6E0ACE] hover:bg-[#8A2BE2] 
                  transition-all rounded-2xl p-5 flex items-center gap-5 
                  text-white shadow-xl 
                  ${index === 0 || index === 2 ? "self-start" : "self-end"}`}
                >
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <Icon className="w-7 h-7 text-[#6E0ACE]" />
                  </div>

                  <span className="font-semibold text-lg whitespace-pre-line leading-tight">
                    {formatTitle(feature.title)}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={mobileImg}
              alt="Mobile App Interface"
              className="w-72 h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            />
          </div>

          {/* Right Column (Zig-Zag) */}
          <div className="flex flex-col gap-10">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`w-fit bg-[#6E0ACE] hover:bg-[#8A2BE2] 
                  transition-all rounded-2xl p-5 flex items-center gap-5 
                  text-white shadow-xl 
                  ${index === 0 || index === 2 ? "self-start" : "self-end"}`}
                >
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <Icon className="w-7 h-7 text-[#6E0ACE]" />
                  </div>

                  <span className="font-semibold text-lg whitespace-pre-line leading-tight">
                    {formatTitle(feature.title)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/*MOBILE LAYOUT*/}
        <div className="lg:hidden flex flex-col items-center gap-6 mt-4">

          <img
            src={mobileImg}
            alt="Mobile App"
            className="w-60 sm:w-72 mb-10 drop-shadow-xl"
          />

          {allFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="w-full max-w-md bg-[#6E0ACE] hover:bg-[#8A2BE2] 
                transition-all rounded-2xl p-4 flex items-center gap-4 
                text-white shadow-lg"
              >
                <div className="bg-white p-3 rounded-full">
                  <Icon className="w-6 h-6 text-[#6E0ACE]" />
                </div>

                <span className="font-medium text-base whitespace-pre-line leading-tight">
                  {formatTitle(feature.title)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
