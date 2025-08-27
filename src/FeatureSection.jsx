import React, { useState } from "react";
import { FaUserMd, FaBrain, FaTrophy } from "react-icons/fa";
import { GiHeartOrgan } from "react-icons/gi";
import logo from './assets/Vmax Logo 2.png';


const features = [
  {
    title: "Expert dietitians that cover over 19 health areas",
    icon: <FaUserMd className="text-purple-600 text-xl" />,
    img:logo
  },
  {
    title: "Personalized strategy for each employee",
    icon: <GiHeartOrgan className="text-purple-600 text-xl" />,
    img:logo
  },
  {
    title: "Behavior change approach with no restrictions",
    icon: <FaBrain className="text-purple-600 text-xl" />,
  },
  {
    title: "Daily support to boost motivation and results",
    icon: <FaTrophy className="text-purple-600 text-xl" />,
  },
];

const OurSolution = () => {
  const [activeMobile, setActiveMobile] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
  

  return (
    <section 
            id="product" 
            className="relative md:py-2 mt-20 sm:py-16 md:mt-10 lg:mt-100  max-w-7xl mx-auto px-4 md:px-6 text-center bg-no-repeat bg-bottom bg-contain pb-20 lg:pb-20 md:pb-20"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="absolute inset-0 bg-white/50"></div>
            <div className="relative text-center max-w-2xl mx-auto">
              <h3 className="mb-6 text-sm font-semibold bg-purple-600 text-white px-3 py-1 rounded-lg inline-block">Why VMax</h3>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-black">Everything you need to run people operations</h2>
              <p className="mt-3 text-gray-800 text-base sm:text-lg">From client management to payments — VMax streamlines your fitness & wellness business in one place.</p>
            </div>
           <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-1 sm:gap-x-5 gap-y-8">
      {features.map((f, idx) => (
        <motion.article 
          key={idx} 
          whileHover={{ y: -6 }} 
          className="bg-white p-4 rounded-2xl shadow-lg ring-1 ring-gray-200 transition hover:shadow-2xl flex flex-col items-center text-center max-w-xs mx-auto h-full"
        >
          <div className="p-5 flex flex-col justify-between h-full">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 mb-4">
              <span className="text-4xl text-purple-600">{f.icon}</span>
            </div>
            <div className="text-black font-bold mb-2 text-xl sm:text-2xl">{f.title}</div>
            <p className="text-gray-600 text-base sm:text-lg">{f.desc}</p>
          </div>
        </motion.article>
      ))}
    </div>
    
          </section>

    /*
    <section className="py-12 px-4 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
         Common Header 
        <div className="text-center lg:text-left mb-10 lg:mb-0">
          <h4 className="text-purple-600 font-semibold uppercase tracking-wide">
            Our Solution
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
            Person-centered <br /> wellness program
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            A 100% inclusive program that delivers
            <br /> personalized nutrition care to every employee,
            <br />
            regardless of their goals.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition">
            Request demo →
          </button>
        </div>

     <div className="flex flex-wrap gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-500 cursor-pointer shadow-md h-44 flex flex-col justify-between flex-1 min-w-[12rem]
                ${activeIndex === idx ? "flex-[2]" : ""}
              `}
            >
              {/* Text Section 
              <div className="relative z-10">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mb-2">
                  {feature.icon}
                </div>
                <h3
                  className={`text-base font-bold text-gray-900 leading-snug transition-all duration-300
                    ${activeIndex === idx ? "pr-20" : "pr-0"}
                  `}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Image (bottom-right, only when hovered) 
              <div
                className={`absolute bottom-3 right-3 w-24 h-24 overflow-hidden rounded-lg transform transition-all duration-300 ease-out
                  ${
                    activeIndex === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }
                `}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tablet (md only) 
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 mt-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-3">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
            </div>
          ))}
        </div>

      {/* Mobile (sm only) 
<div className="md:hidden mt-10 space-y-4">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 relative"
    >
      {/* Header / Icon + Title 
      <button
        className={`w-full flex p-4 text-left transition-all duration-500 ${
          activeMobile === idx ? "flex-col items-start" : "flex-row items-center"
        }`}
        onClick={() =>
          setActiveMobile(activeMobile === idx ? null : idx)
        }
      >
        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full">
          {feature.icon}
        </div>
        <h3
          className={`text-sm font-semibold text-gray-900 transition-all duration-500 mt-0 ml-3 ${
            activeMobile === idx ? "mt-2 ml-0" : ""
          }`}
        >
          {feature.title}
        </h3>
      </button>

      {/* Expandable section with image (relative layout) 
      {feature.img && (
        <div
          className={`overflow-hidden transition-all duration-500 flex justify-end ${
            activeMobile === idx ? "max-h-32 px-4 pb-4" : "max-h-0"
          }`}
        >
          <div className="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  ))}
</div>






      </div>
    </section> */
              
  
)};


