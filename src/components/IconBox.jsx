import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import features from "../data/features";

const IconBoxCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 bg-purple-50">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        speed={5000} // flow speed
        autoplay={{
          delay: 0, // no delay, continuous
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        slidesPerView={3}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {features.map((item, index) => (
       <SwiperSlide key={index}>
  <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center 
                  w-full h-48"> 
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mb-4">
      <div className="text-5xl text-purple-600">{item.icon}</div>
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
