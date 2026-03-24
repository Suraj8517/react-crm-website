import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import DesktopFeature from "./components/FeatureSectionDesktop";
import ForWhomSection from "./components/ForWhomSection";
import CallToActionSection from "./components/CallToActionSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FaqSection";
import SwipeFeaturesSection from "./components/SwipeFeatureSection";
import LogoSwipper from "./components/LogoSwipper";
import MobileAppSection from "./components/MobileAppFeatureSection";
import Business from "./components/BusinessGrowthSection";
import WhyUsSection from "./components/NewFeatureSection";
import SuccessSection from "./components/successSection";
import PageLoader from "./components/pageLoader";
import PerformanceSection from "./components/PerformanceSection";

export default function Landingpages() {
 

  return (
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      <HeroSection />
      <div className="relative z-10 pt-6 md:pt-20 lg:pt-18 2xl:mt-26">
        <LogoSwipper />
      </div>
      <Business />
      <DesktopFeature />
      <SwipeFeaturesSection />
      <MobileAppSection />
      <WhyUsSection />
      <PerformanceSection />
      <ForWhomSection />
      <TestimonialSection />
      <SuccessSection />
      <CallToActionSection />
      <FAQSection />
    </div>
  );
}