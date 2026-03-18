import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is SmartCoach360?",
    answer: "SmartCoach360 is a comprehensive coaching platform designed for wellness professionals, nutritionists, fitness coaches, and health consultants. It streamlines client management, provides diagnostic integrations, and offers tools to grow your coaching business effectively."
  },
  {
    question: "Who can use SmartCoach360?",
    answer: "SmartCoach360 is perfect for nutritionists, dietitians, fitness coaches, personal trainers, wellness consultants, and wellness centers. Whether you're a solo practitioner or managing a team, our platform scales to meet your needs."
  },
  
  {
    question: "How secure is my client data?",
    answer: "Security is our top priority. We're SOC 2 Type II certified and HIPAA compliant. All data is encrypted at rest and in transit with enterprise-grade security. We also offer multi-factor authentication, role-based access control, and regular security audits."
  },
  {
    question: "Can I integrate SmartCoach360 with other tools?",
    answer: "Absolutely! SmartCoach360 integrates seamlessly with popular tools including payment gateways, communication apps, calendar systems, and diagnostic labs. Our integration library is constantly expanding to support your workflow."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through multiple channels including live chat, email, phone, Teams, and WhatsApp. Our dedicated support team is always ready to help you succeed."
  }
];

const FAQSection = ({ onOpenForm, onOpenContactForm }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  id="faqs" className="bg-white text-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-purple-600 text-xs uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black" style={{ fontFamily: "'Cormorant', serif" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-sm">
            Everything you need to know about SmartCoach360
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-zinc-50 rounded-lg border border-zinc-200 hover:border-purple-200 transition-all duration-300 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="text-sm md:text-base font-semibold text-black pr-6 group-hover:text-purple-700 transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 pt-0">
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 p-6 bg-zinc-50 rounded-lg border border-zinc-200">
          <h3 className="text-lg font-semibold mb-1 text-black">Still have questions?</h3>
          <p className="text-zinc-500 text-sm mb-4">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <button
            onClick={onOpenContactForm}
            className="inline-flex items-center px-5 py-2 bg-[#5B21B6] hover:bg-[#8A2BE2] text-white text-sm rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;