import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import features from "../data/features";

const IconBoxCarousel = () => {
  return (
    <div className="relative bg-purple-50 py-20">
      {/* Left & Right blur overlays */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-purple-50 via-purple-50/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-purple-50 via-purple-50/80 to-transparent z-10"></div>

      <Swiper
        modules={[Autoplay]}
        loop
        slidesPerView="auto"
        spaceBetween={20}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="my-swiper"
      >
        {features.map((item, index) => (
          <SwiperSlide key={index} className="!w-[192px]">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center h-48">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <div className="text-5xl text-purple-700">{item.icon}</div>
              </div>
              <h3 className="text-gray-700 font-normal">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconBoxCarousel;
