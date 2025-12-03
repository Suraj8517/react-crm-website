import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

const testimonials = [
  {
    name: "Loga Prithika",
    role: "FitMom Club",
    feedback:
      "We wanted a scalable way to track client success and ensure accountability among our coaching staff. Coach Club gave us full visibility into all programs and results. Not only has it improved team coordination, but it has also helped our club retain clients more effectively",
  },
  {
    name: "John",
    role: "Coach FitMom Club",
    feedback:
      "I struggled to grow my client base because marketing and lead management were overwhelming. Coach Club’s built-in client tracking and automated reminders have streamlined my workflow. I’m now reaching more clients with less effort, and my revenue has increased noticeably.",
  },
  {
    name: "Pramod",
    role: "Client Success Representative, FitMom Club",
    feedback:
      "Handling inquiries and follow-ups manually was exhausting and error-prone. Coach Club’s automated workflows and lead tracking system have made our sales process smooth and efficient. We can now focus on converting leads rather than chasing them.",
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

  const { name, role, feedback } = testimonials[current];

  return (
    <section className="relative py-16 bg-white flex items-center justify-center mt-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative text-center">
        {/* Title */}
        <div className="mb-10">
          <h4 className="text-purple-900 2xl:text-2xl font-semibold uppercase tracking-wide">
            Testimonials
          </h4>
          <h2 className="text-2xl 2xl:text-4xl md:text-3xl font-bold text-black mt-1">
            What Our Clients Say
          </h2>
          <p className="text-black/80 text-sm md:text-base mt-5 mb-5 2xl:text-xl">
            Trusted by coaches and wellness professionals worldwide.
          </p>
        </div>

        {/* Card with Animation */}
        <div className="relative w-full mx-auto overflow-hidden">
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
              onDragEnd={(e, { offset }) => {
                if (offset.x > 100) paginate(-1);
                else if (offset.x < -100) paginate(1);
              }}
              className="shadow-xl flex flex-col w-full max-w-xl mx-auto min-h-[220px] p-6 md:p-8 relative z-10 border border-gray-200 md:border-0 md:shadow-xl"
            >
              {/* Feedback Text */}
              <p className="text-gray-600 italic leading-relaxed 2xl:text-xl text-sm md:text-lg mb-4">
                “{feedback}”
              </p>

              {/* Name and Role */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-purple-800">
                  {name}
                </h3>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between absolute inset-x-0 -bottom-14 md:inset-y-1/2 md:-left-16 md:-right-16 px-4 md:px-0">
          <button
            onClick={() => paginate(-1)}
            className="bg-purple-900 hover:bg-purple-300 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition z-20"
          >
            <ChevronLeft className="w-5 h-5 text-white hover:text-purple-900 " />
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-purple-900 hover:bg-purple-300 shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:bg-purple-200 transition z-20"
          >
            <ChevronRight className="w-5 h-5 text-white hover:text-purple-900" />
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
