import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import indianFlag from "../assets/indian_flag.png";

export default function Footer({ onOpenForm, onOpenContactForm }) {
  return (
    <footer className="bg-gradient-to-b from-[#7025a5] to-[#49157d] text-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14">
        
        {/* === MAIN GRID WRAPPER === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <h2 className="font-extrabold text-white text-3xl mb-2 tracking-wide">
              COACH CLUB
            </h2>
            <p className="text-purple-200 text-sm font-medium">#1 Software for Coaches</p>
            <p className="text-purple-200 text-sm font-medium mb-3">Powered by VMax Health Tech</p>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Empowering coaches to build, manage, and grow their business effortlessly.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-4">
              <span className="text-gray-300 text-sm font-light">Made in</span>
              <img
                src={indianFlag}
                alt="India Flag"
                className="w-6 h-4 object-contain"
              />
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenForm}
                  className="hover:text-white transition-colors duration-300"
                >
                  Book a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactForm}
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
              
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:info@coachclub.in"
                aria-label="Email"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500 mt-12 pt-6 text-sm text-center text-gray-200">
          © {new Date().getFullYear()} Coach Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
