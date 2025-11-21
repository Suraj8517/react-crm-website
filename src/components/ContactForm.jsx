import React, { useState } from "react";

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

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, organization, role, message } = formData;
    if (!name || !email || !phone || !organization || !role || !message) {
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
    const url = "https://script.google.com/macros/s/AKfycbxLgP35OLK1iRJDwHDk1LUo-1iyIOKsBmP5JwnHphvI3CmSGA5rl5RF5xqELmU8o6Q/exec"; 

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${formData.name}&email=${formData.email}&phone=${combinedPhone}&organization=${formData.organization}&role=${formData.role}&message=${formData.message}`,
    })
      .then((res) => res.text())
      .then(() => {
        setLoading(false);
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          organization: "",
          role: "",
          message: "",
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
          Contact Us
        </h2>

        {status.message && (
          <p
            className={`mb-4 text-center font-medium ${
              status.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {status.message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex flex-col sm:flex-row gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="role"
            placeholder="Role / Profession"
            value={formData.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
          />

          <button
            type="submit"
            className="bg-gradient-to-b from-[#7025a5] to-[#2E005C] text-white font-semibold py-2 rounded-xl shadow-md hover:brightness-105 transition flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
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
