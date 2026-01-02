import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Coach Club used for?",
    answer:
      "Coach Club helps wellness professionals organize client information, track progress, and manage their daily operations more efficiently.",
    icon: "💼"
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No, Coach Club is built to be simple and user-friendly, so you can focus on your work without worrying about technical setup.",
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      
      {/* Static Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}
        />
      </div>

      {/* Grid layout: 1 column on mobile, 2 columns on lg+ */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        
        {/* Left side (Title + Subtitle) */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm shadow-lg" style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}>
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6" style={{ color: '#2E005C' }}>
            Got Questions?
            <br />
            <span className="relative inline-block">
              We've Got Answers
              <div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: 'linear-gradient(to right, #4B0082, #2E005C)' }}
              />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg md:text-base 2xl:text-xl leading-relaxed mb-6 md:mb-8">
            Find answers to the most common questions about{" "}
            <span className="font-bold" style={{ color: '#4B0082' }}>
              Coach Club
            </span>.{" "} If you still need help, our support team is always here.
          </p>
        </div>

        {/* Right side (FAQ Accordions) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="relative rounded-2xl backdrop-blur-xl bg-white/80 border border-purple-200/40 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ background: 'linear-gradient(to right, #4B0082, #2E005C)' }}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-5 md:p-6 text-left"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-md transition-all duration-300"
                      style={{ 
                        background: isOpen 
                          ? 'linear-gradient(to bottom, #4B0082, #2E005C)' 
                          : '#f3f4f6'
                      }}
                    >
                      {faq.icon}
                    </div>

                    {/* Question */}
                    <span 
                      className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                        isOpen ? '' : 'text-gray-800'
                      }`}
                      style={{ color: isOpen ? '#2E005C' : undefined }}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown
                      className="w-5 h-5 md:w-6 md:h-6"
                      style={{ color: isOpen ? '#4B0082' : '#9ca3af' }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-20">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}