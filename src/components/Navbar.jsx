import React, { useState } from "react";




export default function Navbar({ onOpenForm, onOpenContactForm }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <h4 className="uppercase text-purple-800 text-xl font-bold">
          COACH CLUB
        </h4>

        <div className="flex items-center gap-6 mr-4">
          {/* Desktop Contact Us */}
          <a
            onClick={onOpenContactForm}
            className="hidden md:inline-flex text-purple-800 text-base font-medium hover:text-purple-950"
          >
            Contact Us
          </a>

          {/* Desktop Book A Demo */}
          <button
            onClick={onOpenForm}
            className="hidden md:inline-flex items-center gap-3 bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white text-base px-6 py-1 rounded-xl shadow-md hover:brightness-105 transition"
          >
            Book A Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3 items-center">
          <a
            href="#"
            onClick={() => { onOpenContactForm(); setMenuOpen(false); }}
            className="text-purple-800 text-sm font-medium hover:underline text-center"
          >
            Contact Us
          </a>

          <button
            onClick={() => { onOpenForm(); setMenuOpen(false); }}
            className="bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white px-4 py-2 rounded-xl shadow-md w-full max-w-xs"
          >
            Book A Demo
          </button>
        </div>
      )}
    </header>
  );
}
