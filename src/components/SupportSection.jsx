import React from "react";
import client from "../assets/client-support.png";

const SupportSection = () => {
  return (
    <section className="relative bg-white py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-purple-600 font-semibold mb-2 sm:mb-3">
              Smarter Client Care
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug md:leading-tight mb-3 sm:mb-4">
              Continuous support <br className="hidden md:block" /> 
              that keeps clients engaged
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Build stronger client relationships through ongoing support,{" "}
              <br className="hidden md:block" />
              progress insights, and personalized communication.
            </p>
          </div>

          <ul className="space-y-3 sm:space-y-4 text-left inline-block">
            {[
              "Stay connected with clients 24/7",
              "Real-time progress tracking & feedback",
              "Personalized follow-ups for better results",
              "Integrated video calls for face-to-face coaching",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-xs sm:text-sm font-bold">
                  ✓
                </span>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={client}
            alt="Client Support"
            className="w-64 sm:w-80 md:w-[26rem] lg:w-[28rem] xl:w-[32rem] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
