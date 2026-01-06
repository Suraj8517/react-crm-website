import React, { useState } from "react";

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

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 max-w-[1600px] mx-auto bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      
      {/* Heading */}
      <div className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          Why Choose Us
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-900 bg-clip-text text-transparent">
          Elevate Your Coaching
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Beyond our powerful features, here are a few more reasons coaches love choosing Coach360
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} data={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    { from: 'from-purple-600', to: 'to-indigo-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { from: 'from-indigo-600', to: 'to-blue-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { from: 'from-blue-600', to: 'to-cyan-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { from: 'from-violet-600', to: 'to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200' },
    { from: 'from-fuchsia-600', to: 'to-pink-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200' },
    { from: 'from-purple-700', to: 'to-indigo-700', bg: 'bg-purple-50', border: 'border-purple-200' },
  ];

  const color = colors[index % colors.length];

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative h-full min-h-[320px] p-8 rounded-2xl bg-white border-2 ${color.border} shadow-sm hover:shadow-2xl transition-all duration-300 ${isHovered ? 'transform -translate-y-2' : ''}`}>
        
        {/* Icon Circle */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center text-3xl mb-6 shadow-lg transition-transform duration-300 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
          {data.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {data.description}
        </p>

        {/* Corner Decoration */}
        <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${color.from} ${color.to} opacity-5 rounded-tl-full transition-opacity duration-300 ${isHovered ? 'opacity-10' : ''}`}></div>
      </div>
    </div>
  );
}