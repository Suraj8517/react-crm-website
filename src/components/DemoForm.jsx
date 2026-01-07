import React, { useState } from "react";
import { X, Calendar, CheckCircle, AlertCircle } from "lucide-react";

export default function FormToSheet({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    organization: "",
    role: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, organization, role } = formData;
    if (!name || !email || !phone || !organization || !role) {
      setStatus({ type: "error", message: "All fields are required!" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Invalid email address!" });
      return false;
    }
    const phoneRegex = /^[0-9]{6,15}$/;
    if (!phoneRegex.test(phone)) {
      setStatus({ type: "error", message: "Phone number is invalid!" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const combinedPhone = `${formData.countryCode}${formData.phone}`;
    const url = import.meta.env.VITE_DEMO_FORM_URL;

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${formData.name}&email=${formData.email}&phone=${combinedPhone}&organization=${formData.organization}&role=${formData.role}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setLoading(false);
        setStatus({ type: "success", message: data });
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          organization: "",
          role: "",
        });
        setTimeout(() => {
          onClose?.();
          setStatus({ type: "", message: "" });
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus({ type: "error", message: "Submission failed!" });
      });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative shadow-2xl transform transition-all animate-slideUp max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-purple-600 to-purple-900 rounded-t-2xl p-3">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-center">
            <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-1.5">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-bold text-white mb-0.5">
              Book A Demo
            </h2>
            <p className="text-purple-100 text-xs">
              Fill out the form and our team will contact you shortly
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-4">
          {/* Status Message */}
          {status.message && (
            <div
              className={`mb-2.5 p-2 rounded-lg flex items-center gap-2 ${
                status.type === "error"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}
            >
              {status.type === "error" ? (
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
              ) : (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              )}
              <span className="text-xs font-medium">{status.message}</span>
            </div>
          )}

          <div className="space-y-2.5">
            {/* Name and Email Row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-20 px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm bg-white"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+971">+971</option>
                  <option value="+65">+65</option>
                  <option value="+49">+49</option>
                  <option value="+33">+33</option>
                  <option value="+39">+39</option>
                  <option value="+81">+81</option>
                  <option value="+60">+60</option>
                  <option value="+66">+66</option>
                  <option value="+62">+62</option>
                  <option value="+94">+94</option>
                  <option value="+92">+92</option>
                  <option value="+880">+880</option>
                  <option value="+27">+27</option>
                  <option value="+254">+254</option>
                  <option value="+34">+34</option>
                  <option value="+46">+46</option>
                  <option value="+31">+31</option>
                  <option value="+41">+41</option>
                  <option value="+52">+52</option>
                  <option value="+55">+55</option>
                  <option value="+63">+63</option>
                  <option value="+84">+84</option>
                  <option value="+90">+90</option>
                  <option value="+20">+20</option>
                  <option value="+974">+974</option>
                  <option value="+968">+968</option>
                  <option value="+973">+973</option>
                </select>

                <input
                  type="text"
                  name="phone"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* Organization and Role Row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Your Company"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Role / Profession
                </label>
                <input
                  type="text"
                  name="role"
                  placeholder="Health Coach"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-2.5 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-2 rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  Book Demo
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}