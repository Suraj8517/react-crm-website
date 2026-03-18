import React from 'react';
import { Users, TrendingUp, Zap, Shield, MessageCircle, Smartphone, Mail, Phone, FileText, Activity, ClipboardPlus, MicroscopeIcon, ShieldUserIcon, LockKeyholeIcon, EarthLockIcon, FileVideoCameraIcon, NotebookIcon, HeadsetIcon, File, MailCheck } from "lucide-react";

const features = [
  {
    title: "Integrations",
    description: "Integrate effortlessly with tools from payment gateways and communication apps to analytics platforms and automation services.",
    icon: Zap,
    badge: "Connect tools",
    preview: { type: "integration" }
  },
  {
    title: "Diagnostic Reports",
    description: "Connect directly with diagnostic labs to access client reports in real time. View blood tests, body assessments, and medical insights instantly.",
    icon: TrendingUp,
    badge: "View reports",
    preview: { type: "chart" }
  },
  {
    title: "Security",
    description: "Your data is protected with enterprise-grade security, end-to-end encryption, and secure cloud storage trusted by leading teams.",
    icon: Shield,
    badge: "Security overview",
    preview: { type: "security" }
  },
  {
    title: "Free Resources",
    description: "Get instant access to premium resources including recipe collections, workout templates, and smart meal planners.",
    icon: FileText,
    badge: "Quick Start Kits",
    preview: { type: "resources" }
  },
  {
    title: "Customer Support",
    description: "Get round-the-clock support from a dedicated team available across chat, calls, email, Teams, and WhatsApp.",
    icon: MessageCircle,
    badge: "Contact support",
    preview: { type: "support" }
  },
  {
    title: "Branded App",
    description: "Deliver your coaching experience through a beautifully branded mobile app that reflects your identity at every touchpoint.",
    icon: Users,
    badge: "Launch your app",
    premium: true,
    preview: { type: "app" }
  }
];

const FeaturePreview = ({ preview, icon: Icon }) => {
  const iconGroups = {
    integration: [Zap, Shield, Users],
    chart: [Activity, ClipboardPlus, MicroscopeIcon],
    security: [ShieldUserIcon, LockKeyholeIcon, EarthLockIcon],
    resources: [File, FileVideoCameraIcon, NotebookIcon],
    support: [HeadsetIcon, Phone, MailCheck],
    app: [Smartphone, Shield, MessageCircle],
  };

  const icons = iconGroups[preview.type] || [];

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      {icons.map((IconComp, i) => (
        <div
          key={i}
          className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center group-hover:border-purple-300 transition-all duration-300"
        >
          <IconComp className="w-6 h-6 text-zinc-400 group-hover:text-purple-500 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
};

const FeatureShowcase = () => {
  return (
    <div className="min-h-screen bg-white text-black py-50 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tighter mb-6 mt-4" style={{ fontFamily: "'Cormorant', serif" }}>
          Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant', serif" }}>
              Us
            </span>
          </h2>
          <p className="text-zinc-500 text-lg mb-8">
            <span className="text-black font-normal">Beyond our powerful features</span>, here are a few <br />more 
            reasons coaches love choosing SmartCoach360
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-zinc-200 hover:border-purple-200 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Section */}
                <div className="p-6 border-b border-zinc-100 bg-zinc-50">
                  <FeaturePreview preview={feature.preview} icon={Icon} />
                </div>

                {/* Content Section */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/10 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                      <Icon className="w-5 h-5 text-purple-500 group-hover:text-purple-600 transition-colors duration-300 relative z-10" />
                    </div>
                    <h3 className="text-lg font-semibold text-black group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FeatureShowcase;