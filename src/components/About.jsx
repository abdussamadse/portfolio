// src/components/About.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">About Me</h2>
      <div className="max-w-3xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
        <p className="mb-4">
          I'm a passionate and driven developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in the MERN stack, I love bringing ideas to life through code.
        </p>
        <p>
          My goal is to continuously learn and grow in the ever-evolving tech landscape, crafting solutions that are not only functional but also provide a great user experience.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;