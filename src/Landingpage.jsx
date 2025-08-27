import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DesktopFeature from "./components/FeatureSectionDesktop";
import FeaturesSection from "./components/FeaturesSection";
import ForWhomSection from "./components/ForWhomSection";
import CallToActionSection from "./components/CallToActionSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FaqSection"

export default function Landingpages() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <Navbar />
      <HeroSection />
      <DesktopFeature />
      <FeaturesSection />
      <ForWhomSection />
      <CallToActionSection />
      <TestimonialSection />
      <FAQSection/>
      <Footer />
    </div>
  );
}
