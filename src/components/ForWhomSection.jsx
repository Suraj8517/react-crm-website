import React, { useEffect, useRef, useState } from "react";
import { Salad, Dumbbell, Sparkles, Building2 } from "lucide-react";
import forwhom from "../assets/forwhom1.webp";
import bg_circle from "../assets/background-circle.svg";

const personas = [
  {
    Icon: Salad,
    label: "Nutritionists & Dietitians",
    desc: "Deliver personalised diet plans, track client nutrition goals, and send automated check-in reminders, all from one place.",
  },
  {
    Icon: Dumbbell,
    label: "Fitness Coaches & Personal Trainers",
    desc: "Manage client programs, log session progress, and grow your client base with built-in lead tracking and follow-up automation.",
  },
  {
    Icon: Sparkles,
    label: "Wellness Consultants",
    desc: "Streamline inquiries, automate follow-ups, and keep your sales pipeline organised so you can focus on converting leads.",
  },
  {
    Icon: Building2,
    label: "Wellness Centers",
    desc: "Get full visibility across all coaches, programs, and client results, coordinate your team and retain clients more effectively.",
  },
];

const stats = [
  { value: "1,000+", label: "Coaches" },
  { value: "98%",    label: "Satisfaction" },
  { value: "3×",     label: "Faster Growth" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function ForWhomSection() {
  const [sectionRef, visible] = useInView();

  return (
    <section
      id="for-whom"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
  
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-purple-100 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-violet-100 blur-[90px]" />
      </div>

      <img
        src={bg_circle}
        alt=""
        className="pointer-events-none absolute right-0 top-0 w-64 opacity-10 lg:w-96"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section label */}
        <div
          className={`mb-12 flex items-center gap-3 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="h-px w-8 bg-purple-400" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
            Who Is SmartCoach360 For?
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* LEFT: Image + stats */}
          <div
            className={`relative w-full lg:w-[46%] transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Offset border frame */}
            <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl border border-purple-200" />

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(124,58,237,0.12)]">
              <img
                src={forwhom}
                alt="Wellness professionals"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                style={{ maxHeight: 520 }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent" />
            </div>

            {/* Stats bar */}
            <div className="absolute -bottom-8 left-4 right-4 grid grid-cols-3 gap-2 rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-[0_8px_32px_rgba(124,58,237,0.10)] backdrop-blur-md">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-0.5">
                  <span className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                    {value}
                  </span>
                  <span className="text-center text-[10px] font-semibold uppercase tracking-wider text-purple-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`w-full pt-10 lg:w-[54%] lg:pt-0 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Headline */}
            <h2
              className="text-4xl font-extrabold leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              Built for Modern<br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                Wellness Experts
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500">
              <span className="font-semibold text-gray-900">SmartCoach360</span> streamlines
              your operations, deepens client engagement, and scales your coaching
              practice, all from one powerful platform.
            </p>

            {/* Persona cards */}
            <ul className="mt-10 space-y-3">
              {personas.map(({ Icon, label, desc }, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 cursor-default transition-all duration-300 hover:border-purple-200 hover:bg-purple-50 hover:shadow-[0_4px_20px_rgba(124,58,237,0.08)]"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 600ms ease ${300 + i * 80}ms, transform 600ms ease ${300 + i * 80}ms, background 300ms, border-color 300ms, box-shadow 300ms`,
                  }}
                >
                  {/* Icon bubble */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 ring-1 ring-purple-200 transition duration-300 group-hover:bg-purple-600 group-hover:ring-purple-600">
                    <Icon
                      className="w-5 h-5 text-purple-600 transition duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-purple-700 transition-colors duration-300">
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4 ">
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
                    "_blank"
                  )
                }
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700 hover:shadow-purple-300 active:scale-95 "
              >
                Book a Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}