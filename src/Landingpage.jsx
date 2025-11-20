import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DesktopFeature from "./components/FeatureSectionDesktop";
import FeaturesSection from "./components/FeaturesSection";
import ForWhomSection from "./components/ForWhomSection";
import CallToActionSection from "./components/CallToActionSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FaqSection";
import SwipeFeaturesSection from "./components/SwipeFeatureSection";
import IconBoxCarousel from "./components/IconBox";
import SupportSection from "./components/SupportSection";
import LogoSwipper from "./components/LogoSwipper";
import MobileAppSection from "./components/MobileAppFeatureSection";
import Business from "./components/BusinessGrowthSection";
import WhyUsSection from "./components/NewFeatureSection";
import SuccessSection from "./components/successSection";
import BusinessResultsSection from "./components/BusinessResultsSection";

// ⬇️ IMPORT THE FORM
import DemoForm from "./components/DemoForm";

export default function Landingpages() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      
      {/* Pass the function to Navbar */}
      <Navbar onOpenForm={() => setOpenForm(true)} />

      {/* Show the form when openForm is true */}
      {openForm && <DemoForm onClose={() => setOpenForm(false)} />}

<HeroSection onOpenForm={() => setOpenForm(true)} />
      <LogoSwipper />
      <Business />
      <DesktopFeature />
      <SwipeFeaturesSection />
      <MobileAppSection />
      <WhyUsSection />
      <ForWhomSection />
      <BusinessResultsSection />
      <TestimonialSection />
      <SuccessSection />
      <CallToActionSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
