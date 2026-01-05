import React, { useState } from "react";
import { MdManageAccounts } from 'react-icons/md';
import { FaUsers } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
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


const OurCombinedFeature = ({onOpenForm}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeMobile, setActiveMobile] = useState(null);

  return (
<section className="relative pt-6 pb-24 px-4 lg:px-20 2xl:px-32 bg-white">
      
      {/* Desktop layout */}
      <div className="hidden lg:flex max-w-6xl 2xl:max-w-9xl mx-auto flex-row items-start gap-10 mt-30">

        {/* Left text */}
        <div className="lg:w-1/3 text-left z-20">
          <h4 className="text-[#6E0ACE] rounded font-semibold uppercase tracking-wide">
            All-in-One Coaching Platform
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Everything you need to run people operations
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            From client management to payments — <span className="font-bold text-purple-900 ">COACH360</span> streamlines your fitness & wellness business in one place.
          </p>
          <button  onClick={onOpenForm} className="bg-gradient-to-b from-[#4B0082] to-[#2E005C] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5e0ace] transition">
            Book a Demo →
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
            Why COACH360
          </h4>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
      Everything you need to run people operations
    </h2>
    <p className="text-gray-600 text-lg mb-6">
       From client management to payments — Coach360 streamlines your fitness & wellness business in one place.
</p>
    <button onClick={onOpenForm} className="bg-[#6E0ACE] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5e0ace] transition">
      Book a Demo →
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
<div className="md:hidden mt-10 space-y-8 max-w-6xl mx-auto">
  {/* Intro text for mobile */}
  <div className="text-center px-4">
    <h4 className="text-[#6E0ACE] text-sm font-semibold uppercase tracking-wider mb-3">
      Why COACH CLUB
    </h4>
    <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
      Everything you need to run people operations
    </h2>
    <p className="text-gray-600 text-base mb-6 leading-relaxed">
      From client management to payments — <span className="font-bold text-purple-900">COACH CLUB</span> streamlines your fitness & wellness business in one place.
    </p>
    <button onClick={onOpenForm}  className="bg-gradient-to-b from-[#4B0082] to-[#2E005C] text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#5e0ace] transition-all hover:shadow-xl active:scale-95">
      Book a Demo →
    </button>
  </div>

  {/* Features cards */}
  <div className="space-y-4 px-4">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 relative ${
          activeMobile === idx ? "bg-gradient-to-br from-purple-50 to-purple-100" : "bg-white"
        }`}
        onClick={() => setActiveMobile(activeMobile === idx ? null : idx)}
      >
        <div className="p-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300 flex-shrink-0 ${
              activeMobile === idx ? "bg-[#6E0ACE]" : "bg-purple-200"
            }`}>
              <span className={`text-2xl transition-colors duration-300 ${
                activeMobile === idx ? "text-white" : "text-purple-600"
              }`}>{feature.icon}</span>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {feature.title}
              </h3>
              {activeMobile === idx && (
                <p className="text-gray-700 text-sm mt-2 leading-relaxed animate-fadeIn">
                  {feature.desc}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Background image with gradient overlay */}
        {activeMobile === idx && feature.img && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-50/90 to-transparent z-10"></div>
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        )}

        {/* Expand indicator */}
        <div className={`absolute bottom-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-purple-200 transition-transform duration-300 ${
          activeMobile === idx ? "rotate-180" : ""
        }`}>
          <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
};

export default OurCombinedFeature;
