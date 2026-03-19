import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const features = [
  "Automated Workflows",
  "Client Tracking",
  "Higher Conversions",
  "Client Retention",
  "Smart Scheduling",
  "Integrated Messaging",
  "Revenue Analytics",
  "Lead Management",
];

const CallToActionSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[400px] py-20 px-6 [background:linear-gradient(150deg,#faf8ff_0%,#f0ebff_60%,#e9e0ff_100%)] [transform:translateZ(0)] [will-change:transform]">

      
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] [transform:translateZ(0)] [will-change:transform]" />

      
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(109,40,217,0.10)_0%,transparent_70%)] [transform:translateZ(0)] [will-change:transform]" />

      
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(109,40,217,0.05)_1px,transparent_1px)] [background-size:30px_30px] [transform:translateZ(0)]" />

      <div className="relative z-10 max-w-5xl mx-auto flex items-center gap-16 flex-wrap">

       
        <div className="flex-1 basis-80 min-w-[280px]">

       
          <div className="inline-flex items-center gap-2 px-4 py-[7px] mb-6 rounded-full text-[13px] font-semibold tracking-wide text-purple-700 border border-purple-300/40 bg-purple-100/50">
            <Sparkles size={13} />
            Built for Coaches & Fitness Businesses
          </div>

          {/* Headline */}
          <h2 className="font-extrabold text-[#1a0a3c] leading-[1.1] mb-5 [font-family:'Cormorant',serif] text-[clamp(32px,5vw,54px)]">
            Ready to grow your<br />
            <span className="text-purple-700">
              coaching business?
            </span>
          </h2>

          
          <p className="text-gray-500 text-base leading-[1.75] max-w-[420px] m-0">
            Manage clients, automate workflows, and grow faster — all from one
            powerful CRM platform designed for modern coaches.
          </p>
        </div>

      
        <div className="flex-1 basis-72 min-w-[260px] flex flex-col gap-4">

         
          <div className="grid grid-cols-2 gap-[10px]">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-[#e5d8ff] rounded-lg px-[14px] py-[10px]"
              >
                <CheckCircle size={15} color="#7c3aed" className="shrink-0" />
                <span className="text-[13px] font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

        
          <div className="h-px my-1 [background:linear-gradient(90deg,rgba(139,92,246,0.2),transparent)]" />

          <button
            onClick={() => window.open("https://calendly.com/sangameswaran-vmaxhealthtech/30min", "_blank")}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-[14px] rounded-xl text-white text-[15px] font-bold border-none cursor-pointer transition-transform duration-300 [background:linear-gradient(135deg,#7c3aed,#4c1d95)] [box-shadow:0_8px_24px_rgba(109,40,217,0.32)]"
            style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
          >
            Book Free Demo
            <ArrowRight
              size={17}
              className="transition-transform duration-300"
              style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
            />
          </button>

        
          <div className="flex items-center justify-center gap-2">
            <CheckCircle size={14} color="#7c3aed" />
            <span className="text-[13px] text-gray-400">Trusted by 100+ coaches across India</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;