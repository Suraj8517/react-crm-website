import React from "react";
import {CreditCard,
  MessageSquare,
  Video,
  BookOpen,
  Apple,
  Network,
  ThumbsUp,
  Smartphone,
} from "lucide-react";
import mobileImg from "../assets/mockup.webp";

export default function MobileAppSection() {
  const leftFeatures = [
    { icon: MessageSquare, title: "Easy Customer Management" },
    { icon: Video, title: "Live Sessions" },
    { icon: BookOpen, title: "Built-in Recipe Builder" },
    { icon: Apple, title: "Nutrition Tracker" },
  ];

  const rightFeatures = [
    { icon: CreditCard, title: "Payment Tracking" },
    { icon: Network, title: "Workflow Automation" },
    { icon: ThumbsUp, title: "Easy Lead Management" },
    { icon: Smartphone, title: "Built-in Calling" },
  ];

  const allFeatures = [...leftFeatures, ...rightFeatures];

  return (
    <div className="bg-gradient-to-b from-[#4B0082] to-[#2E005C] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Delight your customers with 100%<br /> digital service!
          </h1>
          <p className="text-purple-200 text-lg">
            Get access to mobile apps that you can use as your own or offer a
            top-notch customer experience and build loyalty.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
  key={index}
  className={`bg-[#6E0ACE] hover:bg-[#8A2BE2] transition-all rounded-xl p-4 flex items-center gap-4 text-white shadow-md  ${
    index === 0 || index === 2 ? "self-start" : "self-end"
  }`}
>
                  <div className="bg-white p-3 rounded-full">
                    <Icon className="w-6 h-6 text-[#6E0ACE]" />
                  </div>
                  <span className="font-semibold text-md">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={mobileImg}
              alt="Mobile App Interface"
              className="w-60 h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                 <div
  key={index}
  className={`bg-[#6E0ACE] hover:bg-[#8A2BE2] transition-all rounded-xl p-4 flex items-center gap-4 text-white shadow-md  ${
    index === 0 || index === 2 ? "self-start" : "self-end"
  }`}
>
                  <div className="bg-white p-3 rounded-full">
                    <Icon className="w-6 h-6 text-[#6E0ACE]" />
                  </div>
                  <span className="font-semibold text-md">
                    {feature.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-10">
          <img
            src={mobileImg}
            alt="Mobile App"
            className="w-60 sm:w-72 mb-10 drop-shadow-xl"
          />
          {allFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isOdd = (index + 1) % 2 !== 0;
            return (
              <div
                key={index}
                className={`bg-[#6E0ACE] hover:bg-[#8A2BE2] transition-all rounded-xl p-3 flex items-center gap-3 text-white w-full max-w-md ${
                  isOdd ? "self-start" : "self-end"
                }`}
              >
                <div className="bg-white p-2 rounded-full">
                  <Icon className="w-5 h-5 text-[#6E0ACE]" />
                </div>
                <span className="font-medium text-base">{feature.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
