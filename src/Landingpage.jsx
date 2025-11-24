import React, { useState,useEffect } from "react";
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
import LogoSwipper from "./components/LogoSwipper";
import MobileAppSection from "./components/MobileAppFeatureSection";
import Business from "./components/BusinessGrowthSection";
import WhyUsSection from "./components/NewFeatureSection";
import SuccessSection from "./components/successSection";
import PageLoader from "./components/pageLoader";
import DemoForm from "./components/DemoForm";
import ContactForm from "./components/ContactForm";
import PerformanceSection from "./components/PerformanceSection";
export default function Landingpages() {
  const [openDemoForm, setOpenDemoForm] = useState(false);
  const [openContactForm, setOpenContactForm] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1500);
  return () => clearTimeout(timer);
}, []);

if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      
      {/* Pass functions to Navbar */}
      <Navbar 
        onOpenForm={() => setOpenDemoForm(true)} 
        onOpenContactForm={() => setOpenContactForm(true)} 
      />

      {/* Show the modals */}
      {openDemoForm && <DemoForm onClose={() => setOpenDemoForm(false)} />}
      {openContactForm && <ContactForm onClose={() => setOpenContactForm(false)} />}

      {/* Other sections */}
      <HeroSection onOpenForm={() => setOpenDemoForm(true)} />
      <LogoSwipper />
      <Business />
      <DesktopFeature />
      <SwipeFeaturesSection />
      <MobileAppSection />
      <WhyUsSection />
      <ForWhomSection />
      <PerformanceSection/>
      <TestimonialSection />
      <SuccessSection />
      <CallToActionSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
