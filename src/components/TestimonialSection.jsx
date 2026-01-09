import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Loga Prithika",
    role: "FitMom Club",
    feedback:
      "We wanted a scalable way to track client success and ensure accountability among our coaching staff. SmartCoach360 gave us full visibility into all programs and results. Not only has it improved team coordination, but it has also helped us to retain clients more effectively",
  },
  {
    name: "John",
    role: "Coach, FitMom Club",
    feedback:
      "I struggled to grow my client base because marketing and lead management were overwhelming. SmartCoach360's built-in client tracking and automated reminders have streamlined my workflow. I'm now reaching more clients with less effort, and my revenue has increased noticeably.",
  },
  {
    name: "Pramod",
    role: "Client Success Representative, FitMom Club",
    feedback:
      "Handling inquiries and follow-ups manually was exhausting and error-prone. SmartCoach360's automated workflows and lead tracking system have made our sales process smooth and efficient. We can now focus on converting leads rather than chasing them.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const paginate = (newDirection) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let newIndex = current + newDirection;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    
    setCurrent(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const { name, role, feedback } = testimonials[current];

  return (
    <section id="testimonials" className="relative py-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by coaches and wellness professionals worldwide.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-800 to-purple-600 rounded-3xl opacity-20 blur-lg" />
            
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100">
              <div className="absolute -top-6 left-8 md:left-12">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl flex items-center justify-center shadow-xl rotate-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <div 
                key={current}
                className="transition-opacity duration-500"
                style={{ opacity: isAnimating ? 0 : 1 }}
              >
                {/* Feedback */}
                <div className="mb-8 mt-4">
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                    "{feedback}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                 
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {name}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm">
                      {role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex">
                <button
                  onClick={() => paginate(-1)}
                  disabled={isAnimating}
                  aria-label="Previous testimonial"
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-purple-600 border-2 border-purple-200 hover:border-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group disabled:opacity-50"
                >
                  <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </button>
                
                <button
                  onClick={() => paginate(1)}
                  disabled={isAnimating}
                  aria-label="Next testimonial"
                  className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-purple-600 border-2 border-purple-200 hover:border-purple-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group disabled:opacity-50"
                >
                  <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex md:hidden justify-between mt-8 px-4">
            <button
              onClick={() => paginate(-1)}
              disabled={isAnimating}
              aria-label="Previous testimonial"
              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-colors disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => paginate(1)}
              disabled={isAnimating}
              aria-label="Next testimonial"
              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg transition-colors disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating && idx !== current) {
                    setIsAnimating(true);
                    setCurrent(idx);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                disabled={isAnimating}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === current}
                className={`transition-all duration-300 rounded-full disabled:opacity-50 ${
                  idx === current 
                    ? "w-8 h-3 bg-purple-600" 
                    : "w-3 h-3 bg-purple-300 hover:bg-purple-400"
                }`}
              />
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}