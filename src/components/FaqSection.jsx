import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, Sparkles, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is Coach360 used for?",
    answer:
      "Coach360 helps wellness professionals organize client information, track progress, and manage their daily operations more efficiently.",
    icon: "💼"
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No, Coach360 is built to be simple and user-friendly, so you can focus on your work without worrying about technical setup.",
    icon: "⚡"
  },
  {
    question: "Can I manage multiple clients at the same time?",
    answer:
      "Yes, you can easily add and manage multiple clients, monitor their progress, and keep all details organized in one place.",
    icon: "👥"
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, our support team is available to help you with any questions or issues you may face while using the platform.",
    icon: "💬"
  },
];

export default function FAQSection({onOpenContactForm}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Grid layout: 1 column on mobile, 2 columns on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Left side (Title + Subtitle) */}
          <div className="flex flex-col justify-center lg:sticky lg:top-24 lg:self-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-full mb-6 w-fit shadow-lg">
              <HelpCircle className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">FAQ</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
              Got Questions?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-800 to-purple-600">
                We've Got Answers
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              Find answers to the most common questions about Coach360. 
              If you still need help, our support team is always here.
            </p>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-purple-100 text-sm mb-4">
                    Can't find the answer you're looking for? Our support team is here to help.
                  </p>
                  <button className="group flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all" onClick={onOpenContactForm}>
                    Contact Support
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-xs">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">&lt;2h</div>
                <div className="text-gray-600 text-xs">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-gray-600 text-xs">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side (FAQ Accordions) */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl backdrop-blur-xl border transition-all duration-300 overflow-hidden shadow-lg ${
                    isOpen 
                      ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-300 shadow-xl shadow-purple-200/50' 
                      : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-xl'
                  }`}
                >
                  {/* Top gradient accent */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center gap-4 p-5 md:p-6 text-left group"
                  >
                    <div className="flex items-center gap-3 md:gap-4 flex-1">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-lg transition-all duration-300 ${
                          isOpen 
                            ? 'bg-gradient-to-br from-purple-500 to-indigo-500 scale-110' 
                            : 'bg-gray-100 group-hover:bg-purple-50'
                        }`}
                      >
                        {faq.icon}
                      </div>

                      {/* Question */}
                      <span 
                        className={`font-bold text-base md:text-lg transition-colors duration-300 ${
                          isOpen ? 'text-purple-900' : 'text-gray-800 group-hover:text-purple-700'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron */}
                    <div
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'rotate-180 text-purple-600' : 'text-gray-400 group-hover:text-purple-500'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-20">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}


          </div>
        </div>
      </div>
    </section>
  );
}