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
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid layout: 1 column on mobile, 2 columns on lg+ */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        
        {/* Left side (Title + Subtitle) */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 self-start mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm shadow-lg" style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}>
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6" style={{ color: '#2E005C' }}>
            Got Questions?
            <br />
            <span className="relative inline-block">
              We've Got Answers
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ background: 'linear-gradient(to right, #4B0082, #2E005C)' }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 text-base sm:text-lg md:text-base leading-relaxed mb-6 md:mb-8">
            Find answers to the most common questions about{" "}
            <span className="font-bold" style={{ color: '#4B0082' }}>
              Coach Club
            </span>.{" "} If you still need help, our support team is always here.
          </p>

     
        </motion.div>

        {/* Right side (FAQ Accordions) */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl backdrop-blur-xl bg-white/80 border border-purple-200/40 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Top accent line */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                  style={{ background: 'linear-gradient(to right, #4B0082, #2E005C)' }}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-4 p-5 md:p-6 text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    {/* Icon */}
                    <motion.div
                      className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-md"
                      style={{ 
                        background: isOpen 
                          ? 'linear-gradient(to bottom, #4B0082, #2E005C)' 
                          : '#f3f4f6'
                      }}
                      animate={{ rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {faq.icon}
                    </motion.div>

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
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className="w-5 h-5 md:w-6 md:h-6"
                      style={{ color: isOpen ? '#4B0082' : '#9ca3af' }}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-20">
                        <motion.p 
                          className="text-gray-700 text-sm md:text-base leading-relaxed"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 -translate-x-full pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(75, 0, 130, 0.1), transparent)' }}
                  animate={{ translateX: isOpen ? "200%" : "-100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}