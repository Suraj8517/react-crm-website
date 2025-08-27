import React from "react";
import forwhom from "../assets/forwhom1.jpg";

const ForWhomSection = () => {
  return (
    <section id="for-whom"className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col lg:flex-row items-center gap-10 my-25">
      
      {/* Headings for mobile/tablet only */}
      <div className="text-center mb-6 lg:hidden">
        <p className="uppercase tracking-wide text-purple-500 text-xl">
          For Whom
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
          Designed for Wellness Professionals Like You
        </h2>
      </div>

      {/* Left Side (Image + Circle) */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:ml-40 sm:ml-0">
        <div className="relative flex items-center justify-center">

          {/* Main Image */}
          <div className="relative z-10 flex items-center justify-center">
            <img
              src={forwhom}
              alt="Online Appointment"
              className="
                rounded-2xl shadow-lg object-cover
                w-full max-w-xs
                sm:max-w-sm
                md:max-w-md
                lg:max-w-xl
                xl:max-w-2xl
                h-auto
              "
            />
          </div>
        </div>
      </div>

      {/* Right Side (Text Content for Desktop only) */}
      <div className="w-full lg:w-2/3 lg:ml-10 lg:mr-10 text-center lg:text-left">
        {/* Headings for desktop only */}
        <p className="uppercase tracking-wide text-purple-500 font-medium hidden lg:block">
          For Whom
        </p>
        <h2 className="hidden lg:block text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Designed for Wellness Professionals Like You
        </h2>

        <p className="text-gray-600 mt-4">
          VMax is designed to support health and wellness professionals who want
          to streamline their practice, engage clients more effectively, and
          grow their business with ease.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700 inline-block text-left">
          <li className="flex items-start gap-3 font-bold">
            <span className="text-purple-500 font-bold">✓</span> Nutritionists & Dietitians
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="text-purple-500 font-bold">✓</span> Fitness Coaches & Personal Trainers
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="text-purple-500 font-bold">✓</span> Wellness Consultants
          </li>
          <li className="flex items-start gap-3 font-bold">
            <span className="text-purple-500 font-bold">✓</span> Wellness Centers
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ForWhomSection;
