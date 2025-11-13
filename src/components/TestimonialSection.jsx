import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const testimonials = [
  {
    name: "Victoria Kolozian",
    role: "Nutritionist, BSc, ND, Pn1",
    feedback:
      "Since I started to use this platform the time spent on meal planning and nutrition analysis has significantly decreased. The perfect link between me and my clients because we're connected, have access to all important data and track progress any time from anywhere in the world.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Paul Lester",
    role: "Performance Nutritionist @ Nova Centurion",
    feedback:
      "The software is very user-friendly, enabling more effective discussions with clients. Overall my clients have been able to understand how data produced by the platform can be used such as distributing macronutrients more effectively around training and competition.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sophia Almeida",
    role: "Sports Dietitian, Portugal",
    feedback:
      "This platform has streamlined my workflow and made communication with clients seamless. It truly empowers nutrition professionals.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function TestimonialSection() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrent(([prev]) => {
      let newIndex = prev + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return [newIndex, newDirection];
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  const { name, role, feedback, image } = testimonials[current];

  return (
    <section className="relative py-16 bg-white flex items-center justify-center mt-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Title */}
        <div className="text-center mb-10">
          <h4 className="text-[#6E0ACE] rounded font-semibold uppercase tracking-wide">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-1">
            What Our Clients Say
          </h2>
          <p className="text-black/80 text-base md:text-lg mt-5 mb-5">
            Trusted by nutritionists, dietitians, and wellness professionals worldwide
          </p>
        </div>

        {/* Card with Animation */}
        <div className="relative w-full md:w-[500px] lg:w-[700px] mx-auto overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x > 100) paginate(-1);
                else if (offset.x < -100) paginate(1);
              }}
              className="
                bg-gradient-to-r from-white to-purple-300
    rounded-xl shadow-xl 
    flex flex-col md:flex-row 
    w-full md:w-[500px] lg:w-[700px] 
    min-h-[320px] md:min-h-[360px]   
    overflow-hidden relative z-10 mx-auto
    border border-gray-200 
    md:border-0 md:shadow-xl
              "
            >
              {/* Left side - Text */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-2">
                  {name}
                </h3>
                <p className="text-gray-500 font-medium mb-4">{role}</p>
                <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                  “{feedback}”
                </p>
              </div>

              {/* Right side - Image */}
              <div className="w-full md:w-1/2 relative clip-slant h-56 md:h-auto">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-white/40"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between absolute inset-x-0 -bottom-14 md:inset-y-1/2 md:-left-16 md:-right-16 px-4 md:px-0">
          <button
            onClick={() => paginate(-1)}
            className="bg-purple-600 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition z-20"
          >
            <ChevronLeft className="w-5 h-5 text-white hover:text-purple-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-purple-600 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition z-20"
          >
            <ChevronRight className="w-5 h-5 text-white hover:text-purple-600" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-16 md:mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-purple-600" : "bg-purple-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
