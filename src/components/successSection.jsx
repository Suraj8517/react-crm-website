import React from "react";
import { TrendingUp, ShieldCheck, Sparkles, Headphones } from "lucide-react";

const features = [
  {
    title: "Built to Scale Your Coaching",
    description:
      "Grow your client base with a platform that adapts as you do. Manage more clients, programs, and tasks without slowing down.",
    icon: TrendingUp,
  },
  {
    title: "Reliable for Every Client Load",
    description:
      "A stable, high-performance system built to handle hundreds of clients without interruptions.",
    icon: ShieldCheck,
  },
  {
    title: "Designed with Coaching Expertise",
    description:
      "Built with industry insights and tested by top coaches to deliver intuitive workflows.",
    icon: Sparkles,
  },
  {
    title: "Always-On Expert Assistance",
    description:
      "Get fast, human support from experts who understand coaching workflows.",
    icon: Headphones,
  },
];

export default function WhyUsSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-14">
         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tighter mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
          Why Coaches{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
        <p className="text-lg text-gray-600">
          Everything you need to scale your coaching<br/> business  without complexity.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-purple-300/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-[#5B21B6] flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}