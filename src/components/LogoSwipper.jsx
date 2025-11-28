import React from "react";
import fitkid from "../assets/fitkid.png";
import fitdad from "../assets/fitdad.png";
import miracle from "../assets/miracle.png";
import fitmomclub from "../assets/fitmomclub.jpg";
import yoursmindfully from "../assets/yours-mindfully.png";
import lk from "../assets/lk.jpg";
import vmax from "../assets/vmax.png";





const clientLogos = [
  { name: "FitMom Club", logo: fitmomclub },
  {name:"VMax",logo:vmax},
  { name: "FitMom Miracle", logo: miracle },
  { name: "Yours Mindfully", logo: yoursmindfully },
    { name: "FitDad Club", logo: fitdad },
     { name: "LK", logo: lk },
      { name: "FitKids Club", logo: fitkid },
];

export default function ClientLogoSection() {
  const logos = [...clientLogos, ...clientLogos];

  return (
<div className="bg-white flex flex-col items-center 
  mt-[120px] sm:mt-[160px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px] 2xl:mt-[450px]">
      {/* Outer relative wrapper for heading overlap */}
      <div className="relative w-full flex justify-center overflow-visible">
        
        {/* Capsule container */}
        <div className="relative bg-white border-2 border-purple-200 rounded-full shadow-sm px-4 sm:px-6 md:px-10 overflow-hidden 
          w-[85%] sm:w-[80%] md:max-w-4xl lg:max-w-5xl 2xl:max-w-6xl h-16 sm:h-20 md:h-24 2xl:h-30 flex items-center">
          
          {/* Scrolling logos */}
          <div className="flex items-center gap-8 sm:gap-12 md:gap-20 animate-scroll">
            {logos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >

                <img
                  src={client.logo}
                  alt={client.name}
                  className="2xl:h-20 h-12 sm:h-10 md:h-16 object-contain opacity-90 hover:opacity-100 transition"
                /> 
              </div>
            ))}
          </div>

          {/* Fades inside capsule */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-20 rounded-l-full"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 z-20 rounded-r-full"
            style={{
              background:
                "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
            }}
          />
        </div>

        {/* Floating title (overlapping top border) */}
        <div className="absolute -top-3 sm:-top-4 bg-white px-4 sm:px-6 md:px-8 z-40">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-purple-900">
            Trusted by the best
          </h2>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
