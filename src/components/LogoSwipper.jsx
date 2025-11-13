import React from "react";

const clientLogos = [
  { name: "FitMom Club", logo: "/logos/clinic.png" },
  { name: "VMax", logo: "/logos/frommonday.png" },
  { name: "Miracle", logo: "/logos/healthtotal.png" },
  { name: "F2F", logo: "/logos/healthtotal.png" },
  { name: "LK", logo: "/logos/healthtotal.png" },
];

export default function ClientLogoSection() {
  const logos = [...clientLogos, ...clientLogos]; // duplicate for seamless loop

  return (
    <div className="bg-white flex flex-col items-center mt-50 sm:mt-60 md:mt-66 lg:mt-92 xl:mt-90">
      {/* Outer relative wrapper for heading overlap */}
      <div className="relative w-full flex justify-center overflow-visible">
        
        {/* Capsule container */}
        <div className="relative bg-white border-2 border-gradient-to-b from-[#7025a5] to-[#2E005C] rounded-full shadow-sm px-4 sm:px-6 md:px-10 overflow-hidden 
          w-[85%] sm:w-[80%] md:max-w-4xl lg:max-w-5xl h-16 sm:h-20 md:h-24 flex items-center">
          
          {/* Scrolling logos */}
          <div className="flex items-center gap-8 sm:gap-12 md:gap-20 animate-scroll">
            {logos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0"
              >
                <h4 className="text-base sm:text-xl md:text-3xl text-black-700 font-bold whitespace-nowrap">
                  {client.name}
                </h4>
                {/* <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 sm:h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition"
                /> */}
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
          <h2 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800">
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
