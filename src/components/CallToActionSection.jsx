import React from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const CallToActionSection = ({onOpenForm}) => {
  return (
    
    <section className="relative py-20 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-float blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/20 rounded-full animate-float animation-delay-2000 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-300/20 rounded-full animate-pulse blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 p-10 md:p-14 overflow-hidden group border border-white/10">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-700 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-700 blur-2xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-purple-500/30" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-snug">
                Ready to{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-purple-100 bg-clip-text text-transparent">
                    grow
                  </span>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400/40 to-purple-300/40 rounded-full" />
                </span>{" "}
                your coaching business?
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-purple-100/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                Transform your client management with our CRM platform. 
                Streamline workflows, boost engagement, and scale your impact effortlessly.
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-5 mb-10">
                <div className="flex items-center gap-2 text-purple-100 text-sm">
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span className="font-medium">Boost Engagement</span>
                </div>
                <div className="flex items-center gap-2 text-purple-100 text-sm">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="font-medium">Automated Workflows</span>
                </div>
                <div className="flex items-center gap-2 text-purple-100 text-sm">
                  <ArrowRight className="w-4 h-4 text-yellow-300" />
                  <span className="font-medium">Scale Your Impact</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={onOpenForm}  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-400/40 transition text-sm md:text-base">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-purple-400/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
