import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/smartcoach360' },
  { name: 'LinkedIn',  icon: Linkedin,  href: 'https://www.linkedin.com/company/smartcoach360/' },
];

// Collapsible section for mobile
function FooterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800 md:border-none">
     
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 md:py-0 md:cursor-default md:pointer-events-none"
        aria-expanded={open}
      >
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <ChevronDown
          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 md:hidden ${open ? 'rotate-180' : ''}`}
        />
      </button>

     
      <div
        className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 md:pb-0 ${
          open ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

const Footer = ({ onOpenForm, onOpenContactForm }) => {
  return (
    <footer className="bg-[#121212] text-white border-t border-zinc-800 ">
      <div className="max-w-5xl mx-auto px-5 py-12 md:py-16">

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 mb-0 md:mb-12">

          
          <div className="pb-8 md:pb-0 border-b border-zinc-800 md:border-none mb-2 md:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              SmartCoach<span className="text-purple-500">360</span>
            </h2>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Empowering wellness professionals with tools to streamline practice,
              engage clients, and grow their business with ease.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500 hover:bg-zinc-800 transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5 text-zinc-500 group-hover:text-purple-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links">
            <ul className="space-y-3">
              {[
                { label: 'Features',      href: '#features' },
                { label: 'App Features',  href: '#app-features' },
                { label: 'Testimonials',  href: '#testimonials' },
                { label: 'For Whom',      href: '#for-whom' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm py-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Resources */}
          <FooterSection title="Resources">
            <ul className="space-y-3">
              <li>
                <a
                  href="#faqs"
                  className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm py-1 inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      'https://calendly.com/sangameswaran-vmaxhealthtech/30min',
                      '_blank'
                    )
                  }
                  className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm py-1"
                >
                  Book a Demo
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContactForm}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm py-1"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </FooterSection>

          {/* Contact */}
          <FooterSection title="Get in Touch">
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 text-zinc-400 group">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-purple-500" />
                </div>
                <a
                  href="mailto:sales@smartcoach360.ai"
                  className="hover:text-white transition-colors duration-300 text-sm break-all"
                >
                  sales@smartcoach360.ai
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-zinc-400 group">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-purple-500 transition-colors duration-300 mt-0.5">
                  <MapPin className="w-4 h-4 text-purple-500" />
                </div>
                <span className="text-sm leading-relaxed hover:text-white transition-colors duration-300">
                  No 9/14, Bharathi Street,<br />
                  Vellakinar, Coimbatore,<br />
                  Tamil Nadu, 641029
                </span>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-zinc-800 mt-6 md:mt-0 pt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-zinc-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} SmartCoach360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;