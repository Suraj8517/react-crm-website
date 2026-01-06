import React, { useState } from "react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const CallToActionSection = ({ onOpenForm }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-20 blur-2xl transition duration-1000" />
            
            <div className="relative bg-gradient-to-br from-slate-900/90 to-purple-900/30 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-purple-500/20 shadow-2xl">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50 rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl animate-ping bg-purple-500/30" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              {/* Main headline */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-purple-400 via-purple-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
                      grow
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/60 via-purple-700/60 to-purple-500/60 rounded-full" />
                  </span>{" "}
                  your coaching business?
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Transform your client management with our CRM platform. 
                  Streamline workflows, boost engagement, and scale your impact effortlessly.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="group p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur hover:bg-slate-800/60 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 text-purple-100">
                    <Zap className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                    <span className="font-semibold text-sm">Boost Engagement</span>
                  </div>
                </div>
                <div className="group p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur hover:bg-slate-800/60 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 text-purple-100">
                    <Sparkles className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                    <span className="font-semibold text-sm">Automated Workflows</span>
                  </div>
                </div>
                <div className="group p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur hover:bg-slate-800/60 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 text-purple-100">
                    <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" />
                    <span className="font-semibold text-sm">Scale Your Impact</span>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={onOpenForm}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-10 py-5 bg-gradient-to-r from-purple-800 to-purple-950 text-white font-bold rounded-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-3 text-lg">
                    Book a Demo
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </span>
                </button>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;