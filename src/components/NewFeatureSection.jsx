import React from 'react';
import { Zap, TrendingUp, Shield, Smartphone, Book, MessageCircle } from 'lucide-react';

export default function WhySection() {
  const features = [
    {
      title: "Integrations",
      description: "Seamlessly integrate with dozens of third-party tools so you can manage everything from one place.",
      icon: <Zap className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Generate Passive Income",
      description: "Make commissions whenever your customers buy products or book labs — your business grows as theirs does.",
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Data Security & Privacy",
      description: "Build your business with confidence — our 3-tier data security and privacy protocols keep you safe.",
      icon: <Shield className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Branded Mobile Apps",
      description: "Elevate your brand with world-class iOS and Android apps that look and feel premium.",
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Free Resources",
      description: "Access hundreds of templates, workout plans, recipes and more — so you hit the ground running.",
      icon: <Book className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Customer Support",
      description: "Our friendly, expert team is always ready to assist via live chat, email, or phone.",
      icon: <MessageCircle className="w-12 h-12 text-purple-600" />,
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          If the product and its features themselves are not enough, here are a few more reasons to pick us.
        </p>
        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200">
          Join Waitlist
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-black pr-4">{feature.title}</h3>
              <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                {feature.icon}
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
