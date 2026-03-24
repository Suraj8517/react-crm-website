import React from "react";
import { Outlet } from "react-router-dom"; // ✅ ADD THIS
import Navbar from "./Navbar";
import Footer from "./Footer";
import DemoForm from "./DemoForm";
import ContactForm from "./ContactForm";
import { useForm } from "../context/FormContext";

export default function Layout() {
  const { openDemoForm, setOpenDemoForm, openContactForm, setOpenContactForm } = useForm();

  return (
    <div className="min-h-screen bg-white-50 text-gray-900 antialiased">
      <Navbar
        onOpenForm={() => setOpenDemoForm(true)}
        onOpenContactForm={() => setOpenContactForm(true)}
      />

      {openDemoForm && <DemoForm onClose={() => setOpenDemoForm(false)} />}
      {openContactForm && <ContactForm onClose={() => setOpenContactForm(false)} />}

      {/* ✅ THIS RENDERS YOUR PAGES */}
      <Outlet />

      <Footer
        onOpenForm={() => setOpenDemoForm(true)}
        onOpenContactForm={() => setOpenContactForm(true)}
      />
    </div>
  );
}