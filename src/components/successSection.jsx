import React from "react";
import { TrendingUp, ShieldCheck, Sparkles, Headphones } from "lucide-react";

const iconWrapper =
  "w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-white shadow-[inset_4px_4px_12px_rgba(255,255,255,0.9),inset_-4px_-4px_12px_rgba(168,85,247,0.25),0_4px_15px_rgba(0,0,0,0.08)] flex items-center justify-center";

const features = [
  {
    title: "Built to Scale Your Coaching",
    description:
      "Grow your client base with a platform that adapts as you do. Manage more clients, programs, and tasks without slowing down.",
    icon: <TrendingUp className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Reliable for Every Client Load",
    description:
      "A stable, high-performance system built to handle hundreds of clients, programs, and daily activities without interruptions.",
    icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Designed with Coaching Expertise",
    description:
      "Built with industry insights and tested by top coaches to deliver smart tools, intuitive workflows, and real coaching impact.",
    icon: <Sparkles className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Always-On Expert Assistance",
    description:
      "Get fast, human support from experts who understand coaching workflows and help you grow your business with confidence.",
    icon: <Headphones className="w-10 h-10 text-purple-600" />,
  },
];


export default function WhyUsSection() {
  return (
    <section className="w-full bg-white lg:py-20  px-6 sm:py-6">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-black mb-16">
        How We Help You Succeed
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl border border-purple-300/30 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-6">
              <div className={iconWrapper}>{feature.icon}</div>
            </div>

            <h3 className="text-xl font-semibold text-black text-center mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-700 text-center text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
