import React from "react";
import integrations from "../assets/integrations.png";
import report from "../assets/diagonostic-report.jpg";
import security from "../assets/security.jpg";
import customersupport from "../assets/customer-support.webp";
import freeresources from "../assets/free-resources.webp";
import mobileapp from "../assets/mobile-app.webp";
import { motion } from "framer-motion";




export default function WhyUsSection() {
  const block1 = {
    leftVertical: {
      title: "Integrations",
      description:
        "Integrate effortlessly with all your favorite tools—from payment gateways and communication apps to analytics platforms and automation services. Streamline your operations, reduce manual work, and create a smooth, connected experience for both you and your clients",
      image: integrations,
      type: "vertical",
    },
    rightTop: {
      title: "Diagnostic Reports",
      description:
        "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly so you can make informed decisions, personalize plans, and track improvements with complete accuracy.",
      image: report,
      type: "horizontal",
    },
    rightBottom: {
      title: "Security",
      description:
        "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage. We follow strict compliance standards to ensure that every report, client profile, and conversation stays private and fully safeguarded at all times.",
      image: security,
      type: "horizontal",
    },
  };

  const block2 = {
    leftTop: {
      title: "Free Resources",
      description:
        "Unlock a complete library of premium resources designed to help you scale—recipe collections, workout templates, meal planners, content packs, and educational guides. These ready-to-use tools save hours of preparation time and help you deliver high-value coaching effortlessly.",
      image: freeresources,
      type: "horizontal",
    },
    rightVertical: {
      title: "Branded Apps",
      description:
        "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint. Enjoy personalized dashboards, tailored features, and a smooth interface designed to enhance client engagement. All of this comes ready-to-use—no coding, configuration, or technical setup required—so you can focus entirely on coaching while offering a professional, high-quality mobile experience.",
      image: mobileapp,
      type: "vertical",
    },
    leftBottom: {
      title: "Customer Support",
      description:
        "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp. Whether you need technical help, onboarding assistance, or quick troubleshooting, our experts are always ready to assist you 24/7.",
      image: customersupport,
      type: "horizontal",
    },
  };

  return (
    <section className="px-6 md:px-26 py-26 max-w-7xl mx-auto space-y-20">
        <div className="text-center mb-16">
                  <motion.h2
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                Why Choose Us?
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-lg text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                Beyond our powerful features, here are a few more reasons coaches love choosing Coach Club.
                  </motion.p>
                </div>
      {/* BLOCK 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT — VERTICAL */}
        <FeatureCard data={block1.leftVertical} />

        {/* RIGHT — TWO HORIZONTAL */}
        <div className="space-y-6">
          <FeatureCard data={block1.rightTop} />
          <FeatureCard data={block1.rightBottom} />
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT — TWO HORIZONTAL */}
        <div className="space-y-6">
          <FeatureCard data={block2.leftTop} />
          <FeatureCard data={block2.leftBottom} />
        </div>

        {/* RIGHT — VERTICAL */}
        <FeatureCard data={block2.rightVertical} />
      </div>
    </section>
  );
}

function FeatureCard({ data }) {
  const isVertical = data.type === "vertical";

  return (
    <div
      className={`
        rounded-2xl p-6 bg-white transition-all duration-300 
        border border-purple-300 
        shadow-[0_4px_20px_rgba(168,85,247,0.15)]
        hover:shadow-[0_6px_30px_rgba(168,85,247,0.30)]
        hover:border-purple-500

        /* MOBILE = ALWAYS VERTICAL */
        flex flex-col min-h-[320px]

        /* DESKTOP LOGIC */
        md:${isVertical ? "flex-col h-full" : "flex-row items-center justify-between"}
      `}
    >
      {/* TEXT */}
      <div className={`md:${isVertical ? "" : "flex-1"}`}>
        <h3 className="text-2xl font-bold text-purple-950">{data.title}</h3>
        <p className={`text-gray-600 text-base mt-1 ${isVertical ? "px-4 pt-4":"pr-1"}`}>{data.description}</p>
      </div>

      {/* IMAGE */}
      <img
        src={data.image}
        alt={data.title}
        className={`
          rounded-xl object-contain mt-4
          md:mt-0 md:${isVertical ? "w-full h-84 mt-16 pt-16" : "w-50 h-50 ml-4"}
        `}
      />
    </div>
  );
}
