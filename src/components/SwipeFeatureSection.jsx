import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import features from "../data/features";
import "../App.css";

const SwipeFeaturesSection = () => {
  const purpleShades = [
    "bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50",
    "bg-gradient-to-br from-indigo-100 via-purple-100 to-purple-50",
    "bg-gradient-to-br from-purple-50 via-fuchsia-50 to-purple-100",
    "bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-50",
    "bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200",
    "bg-gradient-to-br from-fuchsia-100 via-purple-100 to-purple-50",
  ];

  return (
    <div id="features" className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto py-15 2xl:py-24">
      {/* Section Header */}
      <div className="text-center mb-16 2xl:mb-24">
        <motion.h2
          className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>

        <motion.p
          className="mt-4 text-lg 2xl:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover all the reasons to grow with our platform
        </motion.p>
      </div>

      {/* === Swiper With Foggy Overlays === */}
      <div className="relative">

        {/* Left Fog Overlay */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 z-20 pointer-events-none 
          bg-gradient-to-r from-white via-white/70 to-transparent hidden sm:block"></div>

        {/* Right Fog Overlay */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 z-20 pointer-events-none
          bg-gradient-to-l from-white via-white/70 to-transparent hidden sm:block"></div>

        <Swiper
          modules={[Pagination, FreeMode]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          spaceBetween={20}
          grabCursor={true}
          freeMode={{ enabled: true, momentum: true }}
          breakpoints={{
            0: { slidesPerView: 1, slidesOffsetBefore: 5, slidesOffsetAfter: 5 },
            768: { slidesPerView: 2, slidesOffsetBefore: 50, slidesOffsetAfter: 50 },
            1024: { slidesPerView: 3, slidesOffsetBefore: 100, slidesOffsetAfter: 100 },
            1536: { slidesPerView: 3, slidesOffsetBefore: 150, slidesOffsetAfter: 150 },
          }}
        >
          {features.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div
                className={`${
                  purpleShades[i % purpleShades.length]
                } rounded-3xl p-8 2xl:p-12 flex flex-col justify-between items-start text-left shadow-lg h-[490px] 2xl:h-[560px] max-w-[400px] 2xl:max-w-[480px] w-full sm:mx-10`}
              >
                <div>
                  <h3 className="text-3xl 2xl:text-4xl font-bold text-purple-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-medium 2xl:text-lg mb-6">
                    {item.desc}
                  </p>
                </div>

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] 2xl:h-[300px] object-cover object-left-top rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-4 2xl:mt-8"></div>
    </div>
  );
};

export default SwipeFeaturesSection;
