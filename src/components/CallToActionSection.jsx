import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

const CallToActionSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Built for Coaches & Fitness Businesses
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tighter mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
          Ready to grow your<br/>
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
               coaching business?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-medium md:text-medium text-gray-600 max-w-2xl mx-auto mb-10">
            Manage clients, automate workflows, and grow faster all from one
            powerful CRM platform designed for modern coaches.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Automated Workflows",
              "Client Tracking",
              "Higher Conversions"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
                  "_blank"
                )
              }
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative px-7 py-3 bg-gradient-to-r from-purple-700 to-[#5B21B6] text-white text-medium font-semibold rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Book Free Demo
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    hovered ? "translate-x-1" : ""
                  }`}
                />
              </span>
            </button>

          </div>

          {/* Social proof */}
          <div className="mt-4 text-gray-400 text-sm">
            Trusted by 100+ coaches across India
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;