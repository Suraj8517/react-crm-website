import React, { useState, useEffect } from "react";
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

  const paginate = (direction) => {
    let newIndex = current + direction;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    setCurrent(newIndex);
  };

  /* ✅ Auto-play (smooth, no flicker) */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
            Trusted by coaches and wellness professionals worldwide.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 rounded-3xl opacity-20 blur-lg" />

          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-100 shadow-[0_20px_60px_rgba(124,58,237,0.15)]">
            
            {/* Quote Icon */}
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl rotate-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* ✅ CROSSFADE CONTENT (NO BLANK) */}
            <div className="relative min-h-[400px] md:min-h-[240px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    i === current
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-4 z-0"
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 mt-4">
                    {Array(5)
                      .fill()
                      .map((_, idx) => (
                        <span key={idx} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                    "{t.feedback}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {t.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {t.name}
                      </h3>
                      <p className="text-purple-700 text-sm font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Arrows */}
            <div className="hidden md:flex">
              <button
                onClick={() => paginate(-1)}
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-purple-600 border border-purple-200 hover:border-purple-600 rounded-full flex items-center justify-center shadow-lg transition group"
              >
                <ChevronLeft className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-purple-600 border border-purple-200 hover:border-purple-600 rounded-full flex items-center justify-center shadow-lg transition group"
              >
                <ChevronRight className="w-6 h-6 text-purple-600 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Arrows */}
        <div className="flex md:hidden justify-between mt-8 px-6">
          <button
            onClick={() => paginate(-1)}
            className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => paginate(1)}
            className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-3 bg-purple-600"
                  : "w-3 h-3 bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}