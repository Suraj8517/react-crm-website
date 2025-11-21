import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import fitkid from "../assets/fitkid.png";
import fitdad from "../assets/fitdad.png";
import miracle from "../assets/miracle.png";
import fitmomclub from "../assets/fitmomclub.jpg";

export default function BusinessResult() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const caseStudies = [
    {
      image: miracle,
      logo: 'Miracle',
      title: 'Miracle Streamlined Customer Management and Doubled Lead Conversions with Our platform'
    },
    {
      image: fitmomclub,
      logo: 'FitMom',
      subtitle: 'CLUB',
      title: 'FitMom Club Boosted Member Engagement by 80% Using Our Health Tracking Tools'
    },
    {
      image: fitdad,
      logo: 'fitDad',
      subtitle: 'CLUB',
      title: 'FitDad Achieved 10x ROI by Automating Customer Follow-ups with Our solution'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % caseStudies.length;
      cards.push(caseStudies[index]);
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black py-20 px-4">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Proven results from businesses like yours
          </h2>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3 mt-4 pr-10 md:mt-0 md:translate-y-2 md:-translate-x-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                         backdrop-blur-sm flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                         backdrop-blur-sm flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Static Left Card */}
          <div className="relative rounded-2xl overflow-hidden h-[350px]">
            <div className="absolute backdrop-blur-2xl" />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              {/* Stat 1 */}
              <div>
                <div className="relative inline-block">
                  <div className="text-6xl font-bold text-white relative z-10">
                    5<span className="text-6xl">x</span>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-6 z-10 
                      bg-gradient-to-l from-[#481776] to-transparent pointer-events-none" />
                </div>
                <p className="text-purple-200 text-base">
                  Boost in lead generation
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="relative inline-block">
                  <div className="text-6xl font-bold text-white relative z-10">
                    50<span className="text-6xl">%</span>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-6 z-10 
                      bg-gradient-to-l from-[#4F107E] to-transparent pointer-events-none" />
                </div>
                <p className="text-purple-200 text-base">
                  Repeat customers growing
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="relative inline-block">
                  <div className="text-6xl font-bold text-white relative z-10">
                    84<span className="text-6xl">%</span>
                  </div>
                  <div className="absolute inset-y-0 right-0 w-6 z-10 
                      bg-gradient-to-l from-[#551486] to-transparent pointer-events-none" />
                </div>
                <p className="text-purple-200 text-base">
                  Faster responses
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="md:col-span-1 lg:col-span-3">
            <div className="flex gap-4 h-full overflow-x-hidden pb-2 scrollbar-hide">
              <AnimatePresence initial={false}>
                {getVisibleCards().map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[200px] md:w-[260px] lg:w-[280px] flex-shrink-0"
                  >
                    <div className="relative rounded-2xl overflow-hidden border-2 border-purple-950/95 
                      hover:border-purple-400/50 transition-all group cursor-pointer h-[350px]">

                      {/* Card Image */}
                      <img
                        src={item.image}
                        alt={item.logo}
                        className="absolute inset-0 w-full h-full object-cover 
                        group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Full Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/90 to-purple-950/95 pointer-events-none rounded-xl" />

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col h-full p-5">
                        <div className="text-3xl font-bold text-white">{item.logo}</div>

                        {item.subtitle && (
                          <div className="text-xs text-purple-200 tracking-[0.3em] mt-1">
                            {item.subtitle}
                          </div>
                        )}

                        <div className="mt-auto">
                          <h3 className="text-sm text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Mobile Buttons Below Slider */}
            <div className="flex gap-3 justify-center mt-4 md:hidden">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                           backdrop-blur-sm flex items-center justify-center text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 
                           backdrop-blur-sm flex items-center justify-center text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
