import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://api-abdussamadse.vercel.app/api/v1/contacts", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact API error:", error);
      const errMsg = error.response?.data?.message || "Failed to send message.";
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  // Simple SVG spinner for loading inside button
  const Spinner = () => (
    <svg
      className="animate-spin h-5 w-5 text-gray-900 mx-auto"
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
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );

  return (
    <AnimatedSection id="contact">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Get In Touch
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-4">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6 text-gray-300"
        >
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
              Contact Information
            </h3>
            <p>
              <span className="font-medium text-white">Email:</span>{" "}
              <a
                href="mailto:abdussamadse@gmail.com"
                className="text-cyan-300 hover:underline"
              >
                abdussamadse@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-white">Phone:</span>{" "}
              +8801718292406
            </p>
            <p>
              <span className="font-medium text-white">Location:</span>{" "}
              Faridpur, Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-medium text-white">Availability:</span> Open
              to freelance and full-time roles
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
              Connect With Me
            </h3>
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://github.com/abdussamadse"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abdussamadse/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-medium text-gray-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-1 font-medium text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-1 font-medium text-gray-200">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="Write your message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-300 ${
                loading
                  ? "bg-cyan-300 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-400"
              } flex justify-center items-center space-x-2`}
            >
              {loading ? <Spinner /> : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
