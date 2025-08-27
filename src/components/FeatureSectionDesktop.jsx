import React, { useState } from "react";
import { MdManageAccounts } from 'react-icons/md';
import { FaUsers } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import logo from '../assets/Vmax Logo 2.png';
import lead from '../assets/card-img-1.png';
import client from '../assets/card-img-2.png';
import appointment from '../assets/card-img-3.png';




const features = [
  { 
    title: 'Lead Management', 
    icon: <MdManageAccounts />, 
    desc: 'Convert inquiries into paying members quickly.' ,
    img:lead
  },
  { 
    title: 'Client Management', 
    icon: <FaUsers />, 
    desc: 'Maintain member profiles and progress records.', 
    img:client
  },
  { 
    title: 'Appointment Scheduling', 
    icon: <AiFillSchedule />, 
    desc: 'Book consultations and sessions with ease.',
    img:appointment 
  },
  { 
    title: 'Client Progress Tracking', 
    icon: <GiProgression />, 
    desc: 'Track member progress with clear dashboards.' ,
    img:lead
  },
];


const OurCombinedFeature = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeMobile, setActiveMobile] = useState(null);

  return (
    <section className="relative py-16 px-4 lg:px-20 bg-white lg:mt-80 md:mt-60 mt-20">
      
      {/* Desktop layout */}
      <div className="hidden lg:flex max-w-6xl mx-auto flex-row items-start gap-10 mt-30">

        {/* Left text */}
        <div className="lg:w-1/3 text-left z-20">
          <h4 className="text-[#6E0ACE] rounded font-semibold uppercase tracking-wide">
            Why VMax
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Everything you need to run people operations
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            From client management to payments — VMax streamlines your fitness & wellness business in one place.
          </p>
          <button className="bg-[#6E0ACE] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5e0ace] transition">
            Request demo →
          </button>
        </div>

        {/* Right cards */}
        <div className="lg:w-2/3 flex flex-wrap gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative bg-purple-50 rounded-2xl p-6 overflow-hidden transition-all duration-500 cursor-pointer shadow-md h-44 flex flex-col justify-between flex-1 min-w-[16rem]
                ${activeIndex === idx ? "bg-teal flex-[2]" : "bg-purple-50"}
              `}
            >
              <div className="relative z-10">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-200 rounded-full mb-2">
                  {feature.icon}
                </div>
                <h3
  className={`text-lg font-normal text-gray-900 leading-snug break-words whitespace-normal transition-all duration-300 ${
    activeIndex === idx ? "pr-30" : "pr-0"
  }`}
>
  {feature.desc}
</h3>
              </div>
                               {/* Image */}
              {feature.img && (
                <div
                  className={`absolute bottom-0 right-0 w-34 h-34 overflow-hidden transform transition-all duration-300 ease-out
                    ${activeIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                  `}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet layout */}
      <div className="hidden md:block lg:hidden max-w-6xl mx-auto">
  {/* Text full width */}
  <div className="text-center mb-6">
     <h4 className="text-[#6E0ACE] rounded font-semibold uppercase tracking-wide">
            Why VMax
          </h4>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
      Everything you need to run people operations
    </h2>
    <p className="text-gray-600 text-lg mb-6">
       From client management to payments — VMax streamlines your fitness & wellness business in one place.
</p>
    <button className="bg-[#6E0ACE] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5e0ace] transition">
      Request demo →
    </button>
  </div>

  {/* Cards 2-column grid with descriptions */}
  <div className="grid grid-cols-2 gap-6">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className={`relative rounded-xl p-6 shadow-md text-center cursor-pointer overflow-hidden ${activeMobile=== idx? "bg-purple-50":"bg-white "}`}
        onClick={() => setActiveMobile(activeMobile === idx ? null : idx)}
      >
        <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-200 rounded-full mb-3 relative z-10">
          {feature.icon}
        </div>
        <h3 className="text-base font-bold text-gray-900 relative z-10">
          {feature.title}
        </h3>
        {activeMobile === idx && (
          <p className="text-gray-700 text-sm mt-2 relative z-10">{feature.desc}</p>
        )}

      </div>
    ))}
  </div>
</div>

      
{/* Mobile layout */}
<div className="md:hidden mt-10 space-y-6 max-w-6xl mx-auto">
  {/* Intro text for mobile */}
  <div className="text-center px-4">
    <h4 className="text-[#6E0ACE] rounded font-semibold uppercase tracking-wide">
      Why VMax
    </h4>
    <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
      Everything you need to run people operations
    </h2>
    <p className="text-gray-600 text-base mb-4">
      From client management to payments — VMax streamlines your fitness & wellness business in one place.
    </p>
    <button className="bg-[#6E0ACE] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5e0ace] transition">
      Request demo →
    </button>
  </div>

  {/* Features accordion */}
 <div className="space-y-4">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className={`rounded-xl shadow-md overflow-hidden transition-all duration-500 relative ${
        activeMobile === idx ? "bg-purple-50" : "bg-white"
      }`}
    >
      <button
        className="w-full flex flex-col items-center p-6 text-center transition-all duration-500 relative z-10"
        onClick={() =>
          setActiveMobile(activeMobile === idx ? null : idx)
        }
      >
        <div className="w-16 h-16 flex items-center justify-center bg-purple-200 rounded-full">
          <span className="text-4xl text-purple-600">{feature.icon}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mt-2">
          {feature.title}
        </h3>
      </button>

      {/* Show description + background image */}
      {activeMobile === idx && (
        <div className="px-6 pb-6 text-center transition-all duration-500 relative z-10">
          <p className="text-gray-700 text-base mt-2">{feature.desc}</p>
        </div>
      )}

      {/* Background image with low opacity */}
      {activeMobile === idx && feature.img && (
        <img
          src={feature.img}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover opacity-5 z-0"
        />
      )}
    </div>
  ))}
</div>

</div>


    </section>
  );
};

export default OurCombinedFeature;
