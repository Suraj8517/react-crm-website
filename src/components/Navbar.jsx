import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h4 className="uppercase text-purple-800 text-xl font-bold">COACH CLUB</h4>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white text-sm px-4 py-2 rounded-xl shadow-md hover:brightness-105 transition">Get started</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg bg-gray-100">☰</button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
          <button className="bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white px-4 py-2 rounded-xl shadow-md">Get started</button>
        </div>
      )}
    </header>
  );
}
