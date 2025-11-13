import React, { useEffect, useState } from "react";

const logos = [
  ["slack", "aiSensy", "wati", "twilio", "meta", "zoom"],
  ["netcore", "razorpay", "gallabox", "teams", "exotel", "google-ads"],
  ["calendly", "wordpress", "gmail", "whatsapp", "shiksha", "myOperator"],
];

export default function IntegrationSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#012020] to-[#010810] overflow-hidden text-white">
      {/* Background Logos */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {logos.map((row, rowIndex) => {
          // alternate movement: left (-) or right (+)
          const direction = rowIndex % 2 === 0 ? -1 : 1;
          const translateX = (scrollY * 0.2 * direction) % 300; // control speed

          return (
            <div
              key={rowIndex}
              className="flex space-x-10 my-10"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 0.2s linear",
              }}
            >
              {row.map((logo, i) => (
                <div
                  key={i}
                  className="w-40 h-20 flex items-center justify-center bg-gray-900 rounded-lg shadow-md"
                >
                  <span className="text-lg capitalize">{logo}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Connect over{" "}
          <span className="text-green-400">100+ integrations</span>
        </h2>
        <div className="flex justify-center gap-6 mt-6 text-gray-300 text-sm md:text-base">
          <span>🎧 Communication Services</span>
          <span>₹ Payments & Accounting</span>
          <span>🤖 CX & Service Tools</span>
          <span>📅 Internal Systems</span>
        </div>
      </div>
    </section>
  );
}
