import React, { useState } from "react";
import logo from '../assets/Coach 360 Logo.png'
export default function Navbar({ onOpenForm, onOpenContactForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 lg:py-2">
      <div className="xl:max-w-7xl 2xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <div className="flex items-center">
            <img src={logo} className="w-18" alt="logo"></img>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={onOpenContactForm}
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Contact Us
            </button>
            {/* Book A Demo */}
            <button
             onClick={() =>
  window.open(
    "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
    "_blank"
  )
}

              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Book a Demo
            </button>

            {/* Login Button */}
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                onOpenContactForm();
                setMenuOpen(false);
              }}
              className="w-full text-gray-700 hover:text-gray-900 text-base font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </button>

            <button
  onClick={() => {
    window.open(
      "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
      "_blank"
    );
    setMenuOpen(false);
  }}
  className="w-full bg-purple-600 hover:bg-purple-700 text-white text-base font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
>
  Book a Demo
</button>
          </div>
        </div>
      )}
    </header>
  );
}