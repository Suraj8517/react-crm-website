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
  { name: "VMax", logo: vmax },
  { name: "FitMom Miracle", logo: miracle },
  { name: "Yours Mindfully", logo: yoursmindfully },
  { name: "FitDad Club", logo: fitdad },
  { name: "LK", logo: lk },
  { name: "FitKids Club", logo: fitkid },
];

export default function ClientLogoSection() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="bg-white flex flex-col items-center mt-50 sm:mt-60 md:mt-66 lg:mt-92 xl:mt-90">
      <div className="relative w-full flex justify-center overflow-visible">

        {/* Capsule container — width & height reduced ~20% */}
        <div className="relative bg-white border-2 border-purple-200 rounded-full shadow-sm px-3 sm:px-5 md:px-8 overflow-hidden
          w-[60%] sm:w-[56%] md:max-w-2xl lg:max-w-3xl h-12 sm:h-16 md:h-20 flex items-center">

          {/* Scrolling logos */}
          <div className="flex items-center gap-6 sm:gap-10 md:gap-16 animate-scroll">
            {logos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-9 md:h-12 object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

          {/* Fades */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 md:w-14 z-20 rounded-l-full"
            style={{ background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 md:w-14 z-20 rounded-r-full"
            style={{ background: "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0) 100%)" }}
          />
        </div>

        {/* Floating title */}
        <div className="absolute -top-2.5 sm:-top-3 bg-white px-3 sm:px-5 md:px-6 z-40">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold text-purple-900">
            Trusted by the best
          </h2>
        </div>
      </div>

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