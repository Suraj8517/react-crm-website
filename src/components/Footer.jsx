import React from "react";
import { Facebook, Instagram, Linkedin, Mail, ArrowRight, Phone, MapPin } from "lucide-react";
import indianFlag from "../assets/indian_flag.png";

export default function Footer({ onOpenForm, onOpenContactForm }) {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a0b2e] via-[#2d1854] to-[#1a0b2e] text-gray-100 mt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16">
        
        {/* Top section with CTA */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-600 rounded-2xl p-8 md:p-12 mb-16 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Ready to Transform Your Coaching Business?
              </h2>
              <p className="text-purple-100 text-lg">
                Join thousands of coaches already using SmartCoach360
              </p>
            </div>
            <button
              onClick={onOpenForm}
              className="group bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              Book a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="font-extrabold text-white text-2xl mb-2 tracking-wide">
                SMARTCOACH<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">360</span>
              </h2>
              <p className="text-purple-300 text-sm font-semibold">#1 Software for Coaches</p>
              <p className="text-purple-300 text-sm font-medium mb-4">Powered by VMax Health Tech</p>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering coaches to build, manage, and grow their business effortlessly with cutting-edge technology.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-gray-400 text-sm">Made in</span>
                <img
                                src={indianFlag}
                                alt="India Flag"
                                className="w-6 h-4 object-contain"
                              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-800 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Features", href: "#features" },
                { label: "App Features", href: "#app-features" },
                { label: "Success Stories", href: "#testimonials" },
                { label: "For Whom", href: "#for-whom" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-800 rounded-full"></div>
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenForm}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Book a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactForm}
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </button>
              </li>
                      {/*
              <li>
                <a
                  href="#support"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Support Center
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </a>
              </li>
              */}
            </ul>
          </div>

          {/* Contact & Social 
          <div>
            <h3 className="font-bold text-white mb-6 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-800 rounded-full"></div>
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-6">
              <a href="mailto:hello@coach360.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm">hello@coach360.com</span>
              </a>
              
              <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm">+91 123 456 7890</span>
              </a>
            </div>

            <div className="mb-4">
              <p className="text-gray-400 text-xs mb-3 font-medium">FOLLOW US</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-3 bg-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>*/}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} SmartCoach360. All rights reserved.</p>
                    {/*
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}