import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 text-sm text-gray-500 max-w-7xl mx-auto px-4 md:px-6">
      <div className="border-t pt-8 pb-12 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-bold text-purple-600">COACH 360</div>
          <div className="mt-4">© {new Date().getFullYear()} Coach360. All rights reserved.</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
