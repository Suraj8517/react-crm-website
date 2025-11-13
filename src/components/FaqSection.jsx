import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is COACH360 CRM used for?",
    answer:
      "COACH360 CRM helps wellness professionals organize client information, track progress, and manage their daily operations more efficiently.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No, COACH360 CRM is built to be simple and user-friendly, so you can focus on your work without worrying about technical setup.",
  },
  {
    question: "Can I manage multiple clients at the same time?",
    answer:
      "Yes, you can easily add and manage multiple clients, monitor their progress, and keep all details organized in one place.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, our support team is available to help you with any questions or issues you may face while using the platform.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-6xl mx-auto px-6 py-16 bg-white">
      {/* Grid layout: 1 column on mobile, 2 columns on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side (Title + Subtitle, vertically centered on desktop) */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to the most common questions about <span className="font-bold text-purple-900 ">COACH360</span> CRM.  
            If you still need help, our support team is always here.
          </p>
        </div>

        {/* Right side (FAQ Section) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-purple-300 rounded-xl shadow-sm bg-white overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center p-4 text-left font-medium transition 
                    ${
                      isOpen
                        ? "bg-purple-700 text-white"
                        : "bg-white text-gray-800 hover:bg-purple-50"
                    }`}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : "text-gray-500"
                    }`}
                  />
                </button>


                <AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      key="content"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <div className="px-4 pb-4 text-gray-700">
        {faq.answer}
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
