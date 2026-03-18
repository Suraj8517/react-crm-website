import React, { useState, useEffect, useRef } from "react";


  const sections = [
  {
    id: "01",
    title: "Convert inquiries into paying members",
    content:
      "Capture every lead, follow up faster, and turn conversations into conversions without missing a single opportunity.",
    accent: "#7C3AED",        
    accentLight: "#F3E8FF",   
    accentMid: "#C4B5FD",     
    accentDark: "#4C1D95",    
    tag: "Lead Conversion",
    stat: "3.2×",
    statLabel: "faster follow-up",
  },
  {
    id: "02",
    title: "Track member growth in real-time",
    content:
      "Monitor progress, engagement, and milestones with clear dashboards built specifically for coaches.",
    accent: "#6D28D9",
    accentLight: "#F5F3FF",
    accentMid: "#DDD6FE",
    accentDark: "#3B0764",
    tag: "Analytics",
    stat: "94%",
    statLabel: "retention rate",
  },
  {
    id: "03",
    title: "Manage billing & communication easily",
    content:
      "Handle subscriptions, payments, and conversations from one unified platform — no juggling tools.",
    accent: "#5B21B6",
    accentLight: "#FAF5FF",
    accentMid: "#E9D5FF",
    accentDark: "#2E1065",
    tag: "Billing",
    stat: "$0",
    statLabel: "missed payments",
  },
];

function InquiryMockup() {
  const rows = [
    { name: "Sarah K.",   time: "2m ago",  status: "New",         color: "#6C47FF" },
    { name: "Marcus T.",  time: "18m ago", status: "Followed up", color: "#059669" },
    { name: "Priya N.",   time: "1h ago",  status: "Converted",   color: "#0284C7" },
    { name: "Alex W.",    time: "3h ago",  status: "Converted",   color: "#0284C7" },
  ];
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">
        Recent Inquiries
      </p>
      <div className="flex flex-col gap-1.5 mb-3">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2.5 bg-white rounded-xl border border-slate-100">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: `${r.color}18`, color: r.color }}
              >
                {r.name[0]}
              </div>
              <div>
                <p className="text-[12px] font-semibold text-slate-800 leading-none mb-0.5">{r.name}</p>
                <p className="text-[10px] text-slate-400">{r.time}</p>
              </div>
            </div>
            <span
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: `${r.color}14`, color: r.color, border: `1px solid ${r.color}28` }}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5 px-3 py-2.5 bg-violet-50 rounded-xl border border-dashed border-violet-200">
        <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-violet-500 text-base leading-none shrink-0">+</div>
        <p className="text-[11px] text-slate-400">Add new leads</p>
      </div>
    </div>
  );
}

function GrowthMockup() {
  const bars   = [38, 52, 44, 68, 75, 63, 82, 71, 90, 85, 94, 100];
  const months = ["J","F","M","A","M","J","J","A","S","O","N","D"];
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[{ v: "248", l: "Members" }, { v: "+12%", l: "This month" }, { v: "94%", l: "Retained" }].map((m, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-100 p-2.5 text-center">
            <p className="text-base font-extrabold text-slate-800">{m.v}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{m.l}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-100 p-3.5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Member Growth 2024</p>
        <div className="flex items-end gap-1 h-20">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-sm"
                style={{
                  height: `${Math.round(h * 0.74)}px`,
                  background: i === 11 ? "#0284C7" : `rgba(2,132,199,${(0.13 + h * 0.0056).toFixed(2)})`,
                }}
              />
              <span className="text-[8px] text-slate-300">{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BillingMockup() {
  const plans = [
    { name: "Elite Program",     members: 48,  amount: "$2,880" },
    { name: "Group Classes",     members: 120, amount: "$3,600" },
    { name: "Personal Training", members: 24,  amount: "$4,320" },
  ];
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Active Subscriptions</p>
      <div className="flex flex-col gap-1.5 mb-3">
        {plans.map((p, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2.5 bg-white rounded-xl border border-slate-100">
            <div>
              <p className="text-[12px] font-semibold text-slate-800 leading-none mb-0.5">{p.name}</p>
              <p className="text-[10px] text-slate-400">{p.members} members</p>
            </div>
            <div className="text-right">
              <p className="text-[13px] font-bold text-emerald-600">{p.amount}</p>
              <p className="text-[10px] text-emerald-300">/ mo</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
        <span className="text-[12px] text-slate-500">Monthly Revenue</span>
        <span className="text-lg font-extrabold text-emerald-600">$10,800</span>
      </div>
    </div>
  );
}

const MOCKUPS  = [InquiryMockup, GrowthMockup, BillingMockup];
const DURATION = 5000;

export default function GrowthSection() {
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef                  = useRef(null);
  const current                 = sections[active];

  useEffect(() => {
    setProgress(0);
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setActive((prev) => (prev + 1) % sections.length);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  const handleClick = (i) => {
    cancelAnimationFrame(rafRef.current);
    setActive(i);
  };

  const MockupComponent = MOCKUPS[active];

  return (
    <section className="relative overflow-hidden py-24 px-6">

      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full"
        style={{ background: `radial-gradient(circle, ${current.accentLight} 0%, transparent 65%)`, transition: "background 0.7s" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[340px] h-[340px] rounded-full"
        style={{ background: `radial-gradient(circle, ${current.accentLight}90 0%, transparent 70%)` }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 border"
          style={{ background: current.accentLight, borderColor: current.accentMid, transition: "background 0.4s, border-color 0.4s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: current.accent }} />
          <span className="text-[11px] font-bold tracking-wider" style={{ color: current.accent }}>
            Growth Platform
          </span>
        </div>

        <h2 className="text-[clamp(28px,4.5vw,48px)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-3 max-w-xl">
          Scale with every
          <br />
          <span
            style={{
              WebkitBackgroundClip: "text",
              color: current.accent,
              display: "inline-block",
              transition: "background 0.5s",
            }}
          >
            customer interaction
          </span>
        </h2>

        <p className="text-[15px] text-gray-500 max-w-md mb-12 leading-relaxed">
          Manage your entire customer journey in one place — from first inquiry to long-term retention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">

          <div className="flex flex-col gap-1.5  justify-center">
            {sections.map((sec, i) => {
              const isActive = active === i;
              return (
                <div
                  key={i}
                  onClick={() => handleClick(i)}
                  className="relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    padding: "18px 20px",
                    border: `1.5px solid ${isActive ? sec.accent + "38" : "#e4e6f0"}`,
                    background: isActive ? "#fff" : "transparent",
                    boxShadow: isActive ? `0 4px 24px ${sec.accent}14` : "none",
                  }}
                >
                  {/* Progress bar */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-[2.5px] rounded-sm"
                      style={{ width: `${progress}%`, background: sec.accent, transition: "none" }}
                    />
                  )}

                  <div className={`flex items-center justify-between ${isActive ? "mb-2.5" : ""}`}>
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="text-[10px] font-extrabold tracking-widest shrink-0 transition-colors duration-300"
                        style={{ color: isActive ? sec.accent : "#d1d5db" }}
                      >
                        {sec.id}
                      </span>
                      <span
                        className="text-[13.5px] font-semibold truncate transition-colors duration-300"
                        style={{ color: isActive ? "#111827" : "#9ca3af" }}
                      >
                        {sec.title}
                      </span>
                    </div>
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none"
                      className="shrink-0 ml-2 transition-transform duration-300"
                      style={{ transform: isActive ? "rotate(90deg)" : "rotate(0deg)" }}
                    >
                      <path d="M9 18l6-6-6-6" stroke={isActive ? sec.accent : "#d1d5db"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Expanded body */}
                  {isActive && (
                    <div className="animate-[fadeSlide_0.3s_ease_both]">
                      <p className="text-[13px] text-gray-500 leading-relaxed mb-3.5">{sec.content}</p>
                      <div
                        className="inline-flex items-baseline gap-1.5 px-3.5 py-1.5 rounded-lg"
                        style={{ background: sec.accentLight }}
                      >
                        <span className="text-xl font-extrabold" style={{ color: sec.accent }}>{sec.stat}</span>
                        <span className="text-[11px]" style={{ color: sec.accent + "99" }}>{sec.statLabel}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — browser mockup */}
          <div className="md:sticky md:top-10">
            <div className="rounded-[18px] overflow-hidden border border-slate-200 shadow-[0_16px_48px_rgba(80,90,160,.10),0_2px_8px_rgba(80,90,160,.06)]">

              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-slate-100">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
                <div className="flex-1 h-5 bg-slate-100 rounded-md ml-2 flex items-center justify-center gap-1.5 border border-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full opacity-70" style={{ background: current.accent }} />
                  <span className="text-[9.5px] text-slate-400">app.coachplatform.io</span>
                </div>
              </div>

              {/* Mockup content area */}
              <div className="p-4 bg-[#f4f5f9] min-h-[290px]">
                {/* Tag pill */}
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md mb-3.5 border"
                  style={{ background: current.accentLight, borderColor: current.accentMid }}
                >
                  <span className="text-[10.5px] font-bold tracking-wide" style={{ color: current.accent }}>
                    {current.tag}
                  </span>
                </div>

                {/* Animated mockup swap */}
                <div key={active} className="animate-[fadeIn_0.4s_ease_both]">
                  <MockupComponent />
                </div>
              </div>
            </div>

            {/* Glow reflection */}
            <div
              className="w-3/5 h-5 mx-auto blur-md"
              style={{ background: `radial-gradient(ellipse, ${current.accent}18 0%, transparent 70%)`, transition: "background 0.5s" }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}