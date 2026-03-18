import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

function StatCard({ value, suffix, label, delay }) {
  const count = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 hover:scale-[1.04] transition-all duration-300 w-full"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Animated Number */}
      <h3 className="text-5xl font-extrabold mb-3">
        {count.toFixed(value % 1 !== 0 ? 1 : 0)}
        <span className="text-purple-400">{suffix}</span>
      </h3>

      {/* Label */}
      <p className="text-gray-300 text-sm">{label}</p>

      {/* Bottom hover line */}
      <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-purple-300 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}

export default function PerformanceSection() {
  const stats = [
    { value: 8, suffix: "x", label: "Faster Admin Changes" },
    { value: 50, suffix: "%", label: "CRM Cost Savings" },
    { value: 60, suffix: "%", label: "Reduction in TAT" },
    { value: 2.5, suffix: " hrs", label: "Daily Time Saved" },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0B1220] text-white overflow-hidden py-40">

      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" >
            Performance that <br />
            <span className="text-purple-400">drives real growth</span>
          </h2>

          <p className="text-lg text-gray-300">
            Every metric is optimized to save time, reduce <br />
            effort, and scale your business faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              delay={index * 0.15}
            />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm">
          Proven performance improvements across growing coaching businesses
        </div>

      </div>
    </section>
  );
}