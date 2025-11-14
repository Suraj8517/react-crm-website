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
    "bg-gradient-to-br from-purple-50 to-purple-100",
    "bg-gradient-to-br from-purple-100 to-purple-200",
    "bg-gradient-to-br from-purple-200 to-purple-100",
    "bg-gradient-to-br from-purple-50 to-purple-200",
    "bg-gradient-to-br from-purple-100 to-purple-300",
    "bg-gradient-to-br from-purple-50 to-purple-150",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-15">
       <div className="text-center mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
           Our Features
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover all the reasons to grow with our platform
          </motion.p>
        </div>

      <Swiper
        modules={[Pagination, FreeMode]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={20}
        grabCursor={true}
        freeMode={{
          enabled: true,
          momentum: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
          },
          768: {
            slidesPerView: 2,
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
          },
          0: {
            slidesPerView: 1,
            slidesOffsetBefore: 5,
            slidesOffsetAfter: 5,
          },
        }}
      >
        {features.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div
              className={`${
                purpleShades[i % purpleShades.length]
              } rounded-3xl p-8 flex flex-col justify-between items-start text-left shadow-lg h-[490px] max-w-[400px] w-full sm:mx-10`}
            >
              <div>
                <h3 className="text-3xl font-bold text-purple-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-medium mb-6">{item.desc}</p>
              </div>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[260px] object-cover object-left-top rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default SwipeFeaturesSection;
