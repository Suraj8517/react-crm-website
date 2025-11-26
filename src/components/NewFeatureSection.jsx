import React from "react";
import { motion } from "framer-motion";

export default function WhyUsSection() {
  const features = [
    {
      title: "Integrations",
      description: "Integrate effortlessly with all your favorite tools—from payment gateways and communication apps to analytics platforms and automation services. Streamline your operations, reduce manual work, and create a smooth, connected experience for both you and your clients",
      icon: "🔗",
    },
    {
      title: "Diagnostic Reports",
      description: "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly so you can make informed decisions, personalize plans, and track improvements with complete accuracy.",
      icon: "📊",
    },
    {
      title: "Security",
      description: "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage. We follow strict compliance standards to ensure that every report, client profile, and conversation stays private and fully safeguarded at all times.",
      icon: "🔒",
    },
    {
      title: "Free Resources",
      description: "Unlock a complete library of premium resources designed to help you scale—recipe collections, workout templates, meal planners, content packs, and educational guides. These ready-to-use tools save hours of preparation time and help you deliver high-value coaching effortlessly.",
      icon: "📚",
    },
    {
      title: "Customer Support",
      description: "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp. Whether you need technical help, onboarding assistance, or quick troubleshooting, our experts are always ready to assist you 24/7.",
      icon: "💬",
    },
    {
      title: "Branded App",
      description: "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint. Enjoy personalized dashboards, tailored features, and a smooth interface designed to enhance client engagement. All of this comes ready-to-use—no coding, configuration, or technical setup required—so you can focus entirely on coaching while offering a professional, high-quality mobile experience.",
      icon: "📱",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: '#4B0082' }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: '#2E005C' }}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Heading */}
      <div className="relative text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-b from-[#4B0082] to-[#2E005C] text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Why Choose Us
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 md:mb-6 px-4"
          style={{ color: '#2E005C' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Elevate Your Coaching
        </motion.h2>

        <motion.p
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Beyond our powerful features, here are a few more reasons coaches love choosing Coach Club
        </motion.p>
      </div>

      {/* Feature Cards Grid - 1 column mobile, 2 columns tablet, 3 columns desktop */}
      <motion.div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} data={feature} variants={cardVariants} />
        ))}
      </motion.div>
    </section>
  );
}

function FeatureCard({ data, variants }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={variants}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with Glassmorphism */}
      <div className="relative h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] xl:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl bg-white/70 border border-purple-200/40 shadow-xl hover:shadow-2xl transition-all duration-500">
        
        {/* Gradient Accent Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 sm:h-1.5"
          style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* Hover Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-0 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to bottom right, #4B0082, #2E005C)' }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Content */}
        <div className="relative p-5 sm:p-6 md:p-7 lg:p-8 h-full flex flex-col">
          {/* Icon with animated background */}
          <motion.div
            className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-20 blur-xl" style={{ background: 'linear-gradient(to bottom right, #4B0082, #2E005C)' }} />
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg" style={{ background: 'linear-gradient(to bottom, #4B0082, #2E005C)' }}>
              {data.icon}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 transition-all duration-300" style={{ color: isHovered ? '#4B0082' : '#111827' }}>
            {data.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
            {data.description}
          </p>
        </div>

        {/* Shimmer Effect on Hover */}
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{ background: 'linear-gradient(to right, transparent, rgba(75, 0, 130, 0.15), transparent)' }}
          animate={{ translateX: isHovered ? "200%" : "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}