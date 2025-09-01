import React from "react";
import client from "../assets/client-support.png";

const SupportSection = () => {
  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-6 md:px-12 lg:px-20">
        
        {/* LEFT CONTENT */}
        <div className="lg:ml-16 text-center lg:text-left">
          <div className="mb-6">
            <h4 className=" text-sm uppercase tracking-wider text-purple-600 font-semibold mb-3">
              Smarter Client Care
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug md:leading-tight mb-4">
              Continuous support <br className="hidden md:block" /> 
              that keeps clients engaged
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Build stronger client relationships through ongoing support,{" "}
              <br className="hidden md:block" />
              progress insights, and personalized communication.
            </p>
          </div>

          <ul className="space-y-4 inline-block lg:inline-block text-left">
            {[
              "Stay connected with clients 24/7",
              "Real-time progress tracking & feedback",
              "Personalized follow-ups for better results",
              "Integrated video calls for face-to-face coaching",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full text-sm font-bold">
                  ✓
                </span>
                <span className="text-gray-700 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={client}
            alt="Client Support"
            className="w-80 sm:w-96 md:w-[26rem] lg:w-[28rem] xl:w-[32rem] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
