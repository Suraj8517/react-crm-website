import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import indianFlag from "../assets/indian_flag.png"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7025a5] to-[#49157d] text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="font-bold text-white text-2xl mb-2">COACH CLUB</h2>
            <p className="text-purple-200 text-sm font-medium">
              #1 Software for Coaches
            </p>
            <p className="text-purple-200 text-sm font-medium mb-3">
              Powered by VMax health tech
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              Empowering coaches to build, manage, and grow their business with ease.
            </p>
<p className="text-gray-300 text-md mt-4 font-light flex items-center gap-2">
  <span>Made in</span>
  <img
    src={indianFlag}
    alt="India Flag"
    className="w-6 h-4 object-contain relative top-[1px]"
  />
</p>           
          </div>

          {/* Quick Links 
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
*/}
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
                {/*
              <li>
                <a href="#support" className="hover:text-white transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              */}
            </ul>
          </div>

          {/* Social 
          <div>
            <h3 className="font-semibold text-white mb-3">Connect With Us</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="text-gray-200 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-200 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-200 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@coachclub.in"
                aria-label="Email"
                className="text-gray-200 hover:text-white transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          */}
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500 mt-10 pt-6 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Coach Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
