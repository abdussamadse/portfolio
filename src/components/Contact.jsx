// src/components/Contact.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-cyan-400">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!
        </p>
        <a 
          href="mailto:your.email@example.com"
          className="inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors"><FaGithub /></a>
          <a href="#" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors"><FaLinkedin /></a>
          <a href="#" className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;