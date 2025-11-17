import React from "react";
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
import Business from "./components/BusinessGrowthSection" ;
import WhyUsSection from "./components/NewFeatureSection";
import SuccessSection from "./components/successSection";
import BusinessResultsSection from "./components/BusinessResultsSection";
export default function Landingpages() {
  return (
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      <Navbar />
      <HeroSection />
      <LogoSwipper/>
      <Business/>
      <DesktopFeature />
      <SwipeFeaturesSection />
      <MobileAppSection/>
      <WhyUsSection/>
      <ForWhomSection />
      <BusinessResultsSection/>
      <TestimonialSection />
       <SuccessSection/>
      <CallToActionSection />
      <FAQSection />
      <Footer />
      
    </div>
  );
}
