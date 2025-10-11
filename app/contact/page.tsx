"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({ name: "", email: "", company: "", message: "" });
          setSubmitted(false);
        }, 5000);
      } else {
        setError(
          data.error || "Failed to send message. Please try emailing directly."
        );
      }
    } catch (err) {
      setError(
        "Network error. Please try emailing me directly at dharmapuri.phani@gmail.com"
      );
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-400 mb-12">
          Interested in discussing quality engineering strategies, test
          automation, or potential opportunities? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {error && (
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6 text-sm text-red-300">
                {error}
              </div>
            )}

            {submitted ? (
              <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href="mailto:dharmapuri.phani@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  dharmapuri.phani@gmail.com
                </a>
              </div>

              <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <a
                  href="http://www.linkedin.com/in/phani-kumar-dharmapuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="text-3xl mb-3">🐙</div>
                <h3 className="font-bold mb-2">GitHub</h3>
                <a
                  href="https://github.com/Phani-Dharmapuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View GitHub Profile
                </a>
              </div>

              <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-400">Detroit Metro, MI, USA</p>
                <p className="text-sm text-gray-500 mt-1">
                  Open to remote opportunities
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
              <h3 className="font-bold mb-3">Areas of Interest</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Quality Engineering Leadership Roles</li>
                <li>• Test Automation Strategy Consulting</li>
                <li>• AI/ML Testing Advisory</li>
                <li>• Speaking Engagements & Workshops</li>
                <li>• Technical Mentorship Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
