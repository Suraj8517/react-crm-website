import React, { useState, useEffect, useRef } from "react";
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
      "I struggled to grow my client base due to overwhelming marketing and lead management. SmartCoach360 simplified everything with client tracking and automated reminders—helping me reach more clients with less effort and increase revenue.",
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
  const [containerHeight, setContainerHeight] = useState("auto");
  const cardRefs = useRef([]);


  useEffect(() => {
    const measure = () => {
      const heights = cardRefs.current.map((el) => el?.offsetHeight ?? 0);
      const max = Math.max(...heights);
      if (max > 0) setContainerHeight(max);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const paginate = (direction) => {
    setCurrent((prev) => {
      let next = prev + direction;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-10 bg-white overflow-hidden" id="testimonials">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-5">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-3">
            Trusted by coaches and wellness professionals worldwide.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-md rounded-3xl px-6 pt-10 pb-8 md:px-12 md:pt-12 md:pb-10 border border-purple-100 shadow-[0_20px_60px_rgba(124,58,237,0.15)]">

            <div className="absolute -top-6 left-8 md:left-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl rotate-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div
              className="relative"
              style={{ height: containerHeight === "auto" ? "auto" : `${containerHeight}px` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`transition-all duration-500 ease-in-out ${
                   
                    containerHeight === "auto"
                      ? ""
                      : "absolute inset-x-0 top-0"
                  } ${
                    i === current
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-4 z-0"
                  }`}
                >
                  <div className="flex gap-1 mb-4">
                    {Array(5).fill(null).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-base md:text-lg">★</span>
                    ))}
                  </div>

                  <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6">
                    "{t.feedback}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg md:text-xl">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                        {t.name}
                      </h3>
                      <p className="text-purple-700 text-xs md:text-sm font-medium leading-tight mt-0.5 truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
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

        <div className="flex md:hidden justify-between mt-6 px-2">
          <button
            onClick={() => paginate(-1)}
            className="w-11 h-11 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-11 h-11 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 md:mt-10 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current ? "w-8 h-3 bg-purple-600" : "w-3 h-3 bg-purple-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}