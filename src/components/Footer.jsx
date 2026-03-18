import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/smartcoach360' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/smartcoach360/' },
];

const Footer = ({ onOpenForm, onOpenContactForm }) => {
  return (
    <footer className="bg-[#121212] text-white border-t border-zinc-800 mt-30">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">SmartCoach<span className="text-purple-500 font-bold">360</span></h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-md">
              Empowering wellness professionals with tools to streamline practice, engage clients, and grow their business with ease.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:bg-zinc-800 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className='mx-auto'>
            <h3 className="text-lg font-semibold mb-6 ">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#app-features" className="text-zinc-400 hover:text-white transition-colors duration-300">
                  App Features
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-zinc-400 hover:text-white transition-colors duration-300">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#for-whom" className="text-zinc-400 hover:text-white transition-colors duration-300">
                  For Whom
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faqs" className="text-zinc-400 hover:text-white transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <button  onClick={() =>
  window.open(
    "https://calendly.com/sangameswaran-vmaxhealthtech/30min",
    "_blank"
  )
} className="text-zinc-400 hover:text-white transition-colors duration-300">
                  Book a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactForm}
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-400 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <a href="mailto:sales@smartcoach360.ai" className="hover:text-white transition-colors duration-300">
                  sales@smartcoach360.ai
                </a>
              </div>
              {/*}
              <div className="flex items-center gap-3 text-zinc-400 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
                  +1 (234) 567-890
                </a>
              </div>*/}
              
              <div className="flex items-start gap-3 text-zinc-400 group">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <span className="hover:text-white transition-colors duration-300 pt-2">
                  No 9/14, Bharathi Street,<br/> Vellakinar, Coimbatore,<br/> Tamil Nadu, 641029
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} SmartCoach360. All rights reserved.
          </p>
          
          {/*<div className="flex gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
              Security
            </a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;