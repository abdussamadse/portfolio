import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Get In Touch
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-4">
        {/* Left Side - Contact Info with Animation */}
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
              <span className="font-medium text-white">Phone:</span> +880
              1718292406
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
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abdussamadse/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <form>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-medium text-gray-200">Name</label>
              <input
                type="text"
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-medium text-gray-200">Email</label>
              <input
                type="email"
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label className="mb-1 font-medium text-gray-200">Message</label>
              <textarea
                rows="5"
                className="bg-transparent border border-gray-600 p-3 rounded-lg text-white outline-none"
                placeholder="Write your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
