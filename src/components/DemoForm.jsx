import React, { useState } from "react";

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
    const url =
      "https://script.google.com/macros/s/AKfycbx00R0EwQz8D_OCQAPhKNQsvONJKGWl-j0CjskzCHNYrVOIWeljFMGSBnVDW3gU8fCc/exec";

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
          onClose();
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-xl w-full max-w-md p-4 relative shadow-lg sm:p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-purple-800 mb-1 text-center">
          Book A Demo
        </h2>
        <p className="text-sm text-gray-500 mb-3 text-center">
          Fill out the form below and our team will contact you shortly.
        </p>

        {/* Status message */}
        {status.message && (
          <p
            className={`mb-3 text-center font-medium ${
              status.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {status.message}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />

          {/* Phone with country code */}
          <div className="flex flex-col sm:flex-row gap-1">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-2 py-1.5 w-full sm:w-24 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            >
              <option value="+91">+91 (IN)</option>
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (AU)</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
            />
          </div>

          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-2 py-1.5 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white font-semibold py-1.5 rounded-xl shadow-md hover:brightness-105 transition flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            disabled={loading}
          >
            {loading && (
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
            )}
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
