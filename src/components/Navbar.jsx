import React, { useState } from "react";
import logo from "../assets/Vmax Logo 2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <img src={logo} className="w-30 h-auto" alt="VMax Logo" />
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#for-whom" className="hover:text-gray-900 transition">For Whom</a>
          <a href="#faq" className="hover:text-gray-900 transition">FAQ's</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 bg-purple-600 text-white text-sm px-4 py-2 rounded-xl shadow-md hover:brightness-105 transition">Get started</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg bg-gray-100">☰</button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#for-whom" className="hover:text-gray-900 transition">For Whom</a>
          <a href="#faq" className="hover:text-gray-900 transition">FAQ's</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-md">Get started</button>
        </div>
      )}
    </header>
  );
}
