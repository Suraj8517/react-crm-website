import React from "react";
import forwhom from "../assets/forwhom1.webp";
import bg_circle from "../assets/background-circle.svg";

const ForWhomSection = () => {
  return (
    <section
      id="for-whom"
      className="relative max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center gap-10 lg:my-25 sm:my-10"
    >
      {/* Top-right decorative circle */}
      <img
        src={bg_circle}
        alt="Decorative Circle"
        className="absolute top-0 right-0 w-40 lg:w-60 opacity-30 pointer-events-none"
      />

      {/* Purple background overlay */}
      <div className="absolute inset-0 opacity-20 -z-10 rounded-2xl"></div>

      {/* Headings for mobile/tablet */}
      <div className="text-center mb-6 lg:hidden">
        <p className="uppercase tracking-wide text-purple-950 text-xl">
          Who Is Coach Club For?
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
          Designed for Wellness Professionals Like You
        </h2>
      </div>

      {/* Left Side */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:ml-40 sm:ml-0">
        <div className="relative flex items-center justify-center">
          {/* Decorative circle behind main image */}
          <img
            src={bg_circle}
            alt="Decorative Circle"
            className="absolute -bottom-32 -left-24 w-32 lg:w-88 opacity-30 pointer-events-none z-0"
          />

          {/* Main Image */}
          <img
            src={forwhom}
            alt="Online Appointment"
            className="relative z-10 rounded-2xl shadow-lg object-cover
                       w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-2/3 lg:ml-10 lg:mr-10 text-center lg:text-left relative z-10">
        <p className="uppercase tracking-wide text-purple-900 font-medium hidden lg:block sm:text-xl 2xl:text-xl">
          Who Is Coach Club For?
        </p>
        <h2 className="hidden lg:block 2xl:text-4xl text-3xl sm:text-5xl font-bold text-gray-900 mt-2">
          Designed for Wellness Professionals Like You
        </h2>

        <p className="text-gray-600 mt-4 2xl:text-lg">
          <span className="font-bold text-purple-900">COACH CLUB</span> is designed to support health and wellness professionals who want
          to streamline their practice, engage clients more effectively, and
          grow their business with ease.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700 inline-block text-left 2xl:text-lg">
          <li className="flex items-start gap-3 font-bold">
            <span className="w-5 h-5 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs font-bold">✓</span> Nutritionists & Dietitians
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="w-5 h-5 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs font-bold">✓</span> Fitness Coaches & Personal Trainers
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="w-5 h-5 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs font-bold">✓</span> Wellness Consultants
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="w-5 h-5 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs font-bold">✓</span> Wellness Centers
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForWhomSection;
