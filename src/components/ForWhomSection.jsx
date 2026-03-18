import React from "react";
import forwhom from "../assets/forwhom1.webp";
import bg_circle from "../assets/background-circle.svg";

const ForWhomSection = () => {
  return (
    <section
      id="for-whom"
      className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10  rounded-3xl"></div>

      {/* Decorative circle */}
      <img
        src={bg_circle}
        alt=""
        className="absolute top-0 right-0 w-40 lg:w-72 opacity-20 pointer-events-none"
      />

      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        
        {/* Glow behind image */}
        <div className="absolute w-[280px] h-[280px] bg-purple-500/20 blur-[100px] rounded-full"></div>

        {/* Image card */}
        <div className="relative group">
          <img
            src={forwhom}
            alt="Wellness professionals"
            className="rounded-3xl shadow-[0_20px_60px_rgba(124,58,237,0.25)]
                       object-cover w-full max-w-sm md:max-w-md lg:max-w-lg
                       transition duration-500 group-hover:scale-[1.03]"
          />

          {/* Floating badge */}
          <div className="text-white absolute -bottom-6 -right-6 bg-[#5B21B6] px-4 py-2 rounded-xl shadow-lg border border-gray-100 text-sm font-medium">
            Trusted by 1,000+ Coaches
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10">
        
        {/* Label */}
        <p className="uppercase tracking-wider text-purple-600 font-semibold text-sm">
          Who Is SmartCoach360 For?
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 leading-tighter" style={{ fontFamily: "'Cormorant', serif" }}>
          Built for Modern<br/> <span className="text-purple-600">Wellness Experts</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-5 text-base lg:text-medium max-w-xl">
          <span className="font-semibold text-gray-900">SmartCoach360</span> helps you streamline operations, improve client engagement, and scale your coaching business — all from one powerful platform.
        </p>

        {/* List */}
        <ul className="mt-8 space-y-4 text-gray-700 text-left max-w-md mx-auto lg:mx-0">
          
          {[
            "Nutritionists & Dietitians",
            "Fitness Coaches & Personal Trainers",
            "Wellness Consultants",
            "Wellness Centers",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 group transition text-lg font-extrabold"style={{ fontFamily: "'Cormorant Garamond ', serif" }}
            >
              {/* Icon */}
              <div className="w-6 h-6 flex items-center justify-center 
                              bg-purple-100 text-purple-600 
                              rounded-full text-xs font-bold
                              transition group-hover:bg-purple-600 group-hover:text-white">
                ✓
              </div>

              {/* Text */}
              <span className="font-medium group-hover:text-gray-900 transition">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ForWhomSection;