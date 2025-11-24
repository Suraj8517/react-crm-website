import React from "react";
import { motion } from "framer-motion";

export default function PerformanceSection() {
  const stats = [
    { value: "8x", label: "Faster Admin Changes" },
    { value: "50%", label: "CRM Cost Savings" },
    { value: "60%", label: "Reduction in First TAT" },
    { value: "2.5 hrs", label: "Daily Time Saved" },
  ];

  return (
    <section className="w-full bg-[#081F2A] text-white py-20 px-6 relative overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-black opacity-60 pointer-events-none"></div>
   {/* Animated Background Grid */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        exit={{ opacity: 0, scale: 1.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 3s linear infinite'
        }} />
      </motion.div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)); }
          50% { filter: drop-shadow(0 0 40px rgba(168, 85, 247, 1)); }
        }
      `}</style>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug"> 
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#8ff7e7] to-[#b56cff] font-semibold">
            Performance that scales with your growth
          </span>
        </h2>

        <p className="mt-4 text-lg opacity-80">
Every improvement we’ve made is engineered to remove roadblocks and speed up your entire process.
        </p>
      </motion.div>

      {/* Stats Row */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative z-10">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-center relative"
          >
            {/* Gradient Numbers */}
            <h3
              className="
                text-5xl md:text-6xl font-extrabold 
                 bg-gradient-to-r from-[#8fb9f7] to-[#b56cff]
                text-transparent bg-clip-text drop-shadow-lg
              "
            >
              {item.value}
            </h3>

            <p className="mt-3 text-lg opacity-90">{item.label}</p>

            {/* Divider */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-white/20"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
