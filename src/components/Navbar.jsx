import React, { useState } from "react";

export default function Navbar({ onOpenForm, onOpenContactForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100/50 shadow-sm">
      <div
        className="
          max-w-7xl xl:max-w-8xl 2xl:max-w-[1650px]
          mx-auto 
          px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12
          py-4 lg:py-5
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-lg lg:text-xl">CC</span>
          </div>
          <h4
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600
            text-xl lg:text-2xl 2xl:text-3xl font-bold tracking-tight"
          >
            Coach Club
          </h4>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">

          {/* Desktop Contact Us */}
          <button
            onClick={onOpenContactForm}
            className="hidden md:inline-flex text-purple-900/80 
              text-sm lg:text-base 2xl:text-lg font-semibold
              hover:text-purple-700 transition-all duration-300
              py-2 lg:py-2
              relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
              after:bg-gradient-to-r after:from-purple-600 after:to-indigo-600
              "
          >
            Contact Us
          </button>

          {/* Book A Demo */}
          <button
            onClick={onOpenForm}
            className="
              hidden md:inline-flex items-center gap-2
              bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600
              text-white 
              text-sm lg:text-base 2xl:text-lg font-semibold
              px-4 lg:px-4 xl:px-5
              py-2 lg:py-2
              rounded-lg shadow-lg shadow-purple-500/40
              hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105
              transition-all duration-300
              relative overflow-hidden group
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Book a Demo</span>
          </button>

          {/* Login Button */}
          <button
            onClick={() => {
              window.location.href =
                "https://sso.coachclub.ai/auth/login?appId=JgqxADnj&tenantId=JgqxADnj&redirectUrl=https%3A%2F%2Fwww.coachclub.ai";
              setMenuOpen(false);
            }}
            className="
              hidden md:inline-flex items-center gap-2
              border-2 border-purple-200 bg-white/50
              text-purple-900 
              text-sm lg:text-base 2xl:text-lg font-semibold
              px-4 lg:px-4 xl:px-5
              py-2 lg:py-2
              rounded-lg 
              hover:bg-purple-50 hover:border-purple-300 hover:scale-105
              transition-all duration-300 shadow-sm
            "
          >
            <span>Login</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 
              hover:from-purple-200 hover:to-indigo-200 transition-all duration-300
              shadow-sm hover:shadow-md"
          >
            <svg
              className="w-6 h-6 text-purple-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-gradient-to-b from-white to-purple-50/30 backdrop-blur-xl border-t border-purple-100
          px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300"
        >
          <button
            onClick={() => {
              onOpenContactForm();
              setMenuOpen(false);
            }}
            className="text-purple-900 text-base font-semibold hover:text-purple-700 
              transition-all duration-300 py-2 text-center
              border-b border-purple-100 hover:border-purple-300"
          >
            Contact Us
          </button>

          <button
            onClick={() => {
              onOpenForm();
              setMenuOpen(false);
            }}
            className="
              w-full
              bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600
              text-white py-3.5 rounded-full font-semibold shadow-lg shadow-purple-500/40
              hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.02]
              transition-all duration-300 flex items-center justify-center gap-2
            "
          >
            <span>Book A Demo</span>
          </button>

          <button
            onClick={() => {
              window.location.href =
                "https://sso.coachclub.ai/auth/login?appId=JgqxADnj&tenantId=JgqxADnj&redirectUrl=https%3A%2F%2Fwww.coachclub.ai";
              setMenuOpen(false);
            }}
            className="
              w-full
              border-2 border-purple-200 bg-white
              text-purple-900
              py-3.5 rounded-full font-semibold
              hover:bg-purple-50 hover:border-purple-300 hover:scale-[1.02]
              transition-all duration-300 shadow-sm flex items-center justify-center gap-2
            "
          >
            <span>Login</span>
          </button>
        </div>
      )}
    </header>
  );
}
