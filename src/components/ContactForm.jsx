import React, { useState, useRef, useEffect } from "react";
import { X, Send, CheckCircle, AlertCircle, Phone, User, Mail, Building2, Briefcase, MessageSquare, ChevronDown, Search, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Country data ──────────────────────────────────────────────────────────────
const COUNTRIES = [
  { code: "+91",  flag: "🇮🇳", name: "India" },
  { code: "+1",   flag: "🇺🇸", name: "United States" },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65",  flag: "🇸🇬", name: "Singapore" },
  { code: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "+33",  flag: "🇫🇷", name: "France" },
  { code: "+39",  flag: "🇮🇹", name: "Italy" },
  { code: "+81",  flag: "🇯🇵", name: "Japan" },
  { code: "+60",  flag: "🇲🇾", name: "Malaysia" },
  { code: "+66",  flag: "🇹🇭", name: "Thailand" },
  { code: "+62",  flag: "🇮🇩", name: "Indonesia" },
  { code: "+94",  flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+92",  flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+27",  flag: "🇿🇦", name: "South Africa" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+34",  flag: "🇪🇸", name: "Spain" },
  { code: "+46",  flag: "🇸🇪", name: "Sweden" },
  { code: "+31",  flag: "🇳🇱", name: "Netherlands" },
  { code: "+41",  flag: "🇨🇭", name: "Switzerland" },
  { code: "+52",  flag: "🇲🇽", name: "Mexico" },
  { code: "+55",  flag: "🇧🇷", name: "Brazil" },
  { code: "+63",  flag: "🇵🇭", name: "Philippines" },
  { code: "+84",  flag: "🇻🇳", name: "Vietnam" },
  { code: "+90",  flag: "🇹🇷", name: "Turkey" },
  { code: "+20",  flag: "🇪🇬", name: "Egypt" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
];

// ─── Validators ────────────────────────────────────────────────────────────────
const validators = {
  name: (v) => v.trim().length < 2 ? "Name must be at least 2 characters" : "",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
  phone: (v) => /^[0-9]{6,15}$/.test(v) ? "" : "Enter 6–15 digit phone number",
  organization: (v) => v.trim().length < 2 ? "Organization name is required" : "",
  role: (v) => v.trim().length < 2 ? "Role is required" : "",
  message: (v) => v.trim().length < 10 ? "Message must be at least 10 characters" : "",
};

// ─── Country Selector ──────────────────────────────────────────────────────────
function CountrySelector({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const searchRef = useRef(null);

  const selected = COUNTRIES.find((c) => c.code === value) || COUNTRIES[0];
  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setSearch("");
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative", flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 10px",
          height: 40,
          border: "1.5px solid #e5e7eb",
          borderRadius: 10,
          background: "#faf9ff",
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 500,
          color: "#374151",
          whiteSpace: "nowrap",
          transition: "border-color 0.15s",
          outline: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#a78bfa")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
      >
        <span style={{ fontSize: 18, lineHeight: 1 }}>{selected.flag}</span>
        <span>{selected.code}</span>
        <ChevronDown
          size={13}
          style={{
            color: "#9ca3af",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: 0,
              zIndex: 200,
              background: "#fff",
              border: "1.5px solid #e9d5ff",
              borderRadius: 12,
              boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
              width: 240,
              overflow: "hidden",
            }}
          >
            {/* Search */}
            <div
              style={{
                padding: "8px 10px",
                borderBottom: "1px solid #f3f4f6",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Search size={13} style={{ color: "#9ca3af", flexShrink: 0 }} />
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code…"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 12,
                  color: "#374151",
                  width: "100%",
                  background: "transparent",
                }}
              />
            </div>
            {/* List */}
            <div style={{ maxHeight: 200, overflowY: "auto" }}>
              {filtered.length === 0 ? (
                <div
                  style={{
                    padding: "12px 14px",
                    fontSize: 12,
                    color: "#9ca3af",
                    textAlign: "center",
                  }}
                >
                  No results
                </div>
              ) : (
                filtered.map((c) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      onChange(c.code);
                      setOpen(false);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 12px",
                      border: "none",
                      background:
                        c.code === value ? "#f5f3ff" : "transparent",
                      cursor: "pointer",
                      fontSize: 13,
                      color: "#374151",
                      textAlign: "left",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#faf9ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        c.code === value ? "#f5f3ff" : "transparent")
                    }
                  >
                    <span style={{ fontSize: 16, lineHeight: 1 }}>{c.flag}</span>
                    <span style={{ flex: 1 }}>{c.name}</span>
                    <span style={{ color: "#7c3aed", fontWeight: 600, fontSize: 12 }}>
                      {c.code}
                    </span>
                    {c.code === value && (
                      <Check size={12} style={{ color: "#7c3aed", flexShrink: 0 }} />
                    )}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Field wrapper ─────────────────────────────────────────────────────────────
function Field({ label, icon: Icon, error, touched, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#6b7280",
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        {Icon && <Icon size={11} style={{ color: "#a78bfa" }} />}
        {label}
      </label>
      {children}
      <AnimatePresence>
        {touched && error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{
              fontSize: 11,
              color: "#dc2626",
              display: "flex",
              alignItems: "center",
              gap: 4,
              margin: 0,
            }}
          >
            <AlertCircle size={10} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function inputStyle(hasError, touched) {
  return {
    width: "100%",
    padding: "9px 12px",
    border: `1.5px solid ${touched && hasError ? "#fca5a5" : "#e5e7eb"}`,
    borderRadius: 10,
    fontSize: 13,
    color: "#1f2937",
    background: touched && hasError ? "#fff7f7" : "#faf9ff",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    boxSizing: "border-box",
  };
}

function SuccessScreen({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 32px",
        textAlign: "center",
        gap: 16,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 20 }}
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 12px 32px rgba(124,58,237,0.3)",
        }}
      >
        <CheckCircle size={36} color="#fff" />
      </motion.div>
      <div>
        <h3
          style={{
            margin: "0 0 6px",
            fontSize: 20,
            fontWeight: 700,
            color: "#1e1b4b",
          }}
        >
          Message sent!
        </h3>
        <p style={{ margin: 0, fontSize: 13, color: "#6b7280", lineHeight: 1.6 }}>
          Thanks for reaching out. We'll get back to you shortly.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClose}
        style={{
          marginTop: 8,
          padding: "10px 28px",
          borderRadius: 10,
          border: "none",
          background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
        }}
      >
        Close
      </motion.button>
    </motion.div>
  );
}

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    if (name === "countryCode") return "";
    return validators[name]?.(value) ?? "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allTouched = Object.keys(validators).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    const allErrors = Object.keys(validators).reduce(
      (acc, k) => ({ ...acc, [k]: validateField(k, formData[k] ?? "") }),
      {}
    );

    setTouched(allTouched);
    setErrors(allErrors);

    if (Object.values(allErrors).some((e) => e !== "")) return;

    setLoading(true);
    const combinedPhone = `${formData.countryCode}${formData.phone}`;
    const url = import.meta.env.VITE_CONTACT_FORM_URL;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: combinedPhone,
        organization: formData.organization,
        role: formData.role,
        message: formData.message,
      }).toString(),
    })
      .then((res) => res.text())
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          onClose?.();
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setErrors((prev) => ({
          ...prev,
          _global: "Submission failed. Please try again.",
        }));
      });
  };

  const focusRing = {
    onFocus: (e) => {
      e.target.style.borderColor = "#7c3aed";
      e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.12)";
    },
    onBlur: (e) => {
      e.target.style.boxShadow = "none";
    },
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,10,40,0.65)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: 16,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        style={{
          background: "#fff",
          borderRadius: 20,
          width: "100%",
          maxWidth: 560,
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow:
            "0 24px 80px rgba(124,58,237,0.18), 0 4px 24px rgba(0,0,0,0.08)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 10,
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "none",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.35)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
          }
        >
          <X size={15} />
        </button>

        <AnimatePresence mode="wait">
          {success ? (
            <SuccessScreen key="success" onClose={onClose} />
          ) : (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Header */}
              <div
                style={{
                  background: "linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)",
                  borderRadius: "20px 20px 0 0",
                  padding: "24px 28px 20px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.06)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -20,
                    left: 60,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Send size={20} color="#fff" />
                  </div>
                  <div>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Get in Touch
                    </h2>
                    <p
                      style={{
                        margin: "2px 0 0",
                        fontSize: 12,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Global error */}
                <AnimatePresence>
                  {errors._global && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fca5a5",
                        borderRadius: 10,
                        padding: "10px 14px",
                        fontSize: 12,
                        color: "#dc2626",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <AlertCircle size={14} />
                      {errors._global}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name + Email */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                  }}
                >
                  <Field label="Full Name" icon={User} error={errors.name} touched={touched.name}>
                    <input
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={inputStyle(errors.name, touched.name)}
                      {...focusRing}
                    />
                  </Field>
                  <Field label="Email" icon={Mail} error={errors.email} touched={touched.email}>
                    <input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={inputStyle(errors.email, touched.email)}
                      {...focusRing}
                    />
                  </Field>
                </div>

                {/* Phone */}
                <Field label="Phone Number" icon={Phone} error={errors.phone} touched={touched.phone}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <CountrySelector
                      value={formData.countryCode}
                      onChange={(code) =>
                        setFormData((prev) => ({ ...prev, countryCode: code }))
                      }
                    />
                    <input
                      name="phone"
                      type="text"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ ...inputStyle(errors.phone, touched.phone), flex: 1 }}
                      {...focusRing}
                    />
                  </div>
                </Field>

                {/* Organization + Role */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 14,
                  }}
                >
                  <Field label="Organization" icon={Building2} error={errors.organization} touched={touched.organization}>
                    <input
                      name="organization"
                      type="text"
                      placeholder="Your Company"
                      value={formData.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={inputStyle(errors.organization, touched.organization)}
                      {...focusRing}
                    />
                  </Field>
                  <Field label="Role" icon={Briefcase} error={errors.role} touched={touched.role}>
                    <input
                      name="role"
                      type="text"
                      placeholder="Health Coach"
                      value={formData.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={inputStyle(errors.role, touched.role)}
                      {...focusRing}
                    />
                  </Field>
                </div>

                {/* Message */}
                <Field label="Message" icon={MessageSquare} error={errors.message} touched={touched.message}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your needs…"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    style={{
                      ...inputStyle(errors.message, touched.message),
                      resize: "none",
                      lineHeight: 1.6,
                    }}
                    {...focusRing}
                  />
                </Field>

                {/* Submit */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  style={{
                    marginTop: 4,
                    width: "100%",
                    padding: "12px",
                    borderRadius: 12,
                    border: "none",
                    background: loading
                      ? "linear-gradient(135deg, #a78bfa, #8b5cf6)"
                      : "linear-gradient(135deg, #7c3aed, #4c1d95)",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: loading ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    boxShadow: loading
                      ? "none"
                      : "0 6px 20px rgba(124,58,237,0.35)",
                    transition: "box-shadow 0.2s, background 0.2s",
                    letterSpacing: "0.01em",
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        style={{
                          width: 16,
                          height: 16,
                          animation: "spin 0.7s linear infinite",
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="3"
                        />
                        <path
                          d="M12 2a10 10 0 0 1 10 10"
                          stroke="#fff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}