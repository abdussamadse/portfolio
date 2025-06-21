import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-cyan-400">Abdus Samad</span>
        </h1>
        <TypeAnimation
          sequence={[
            "A Full Stack Developer",
            2000,
            "A MERN Stack Specialist",
            2000,
          ]}  
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-4xl text-gray-400 mb-8"
          repeat={Infinity}
        />
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I specialize in building exceptional, high-quality websites and
          applications.
        </p>
        <a
          href="#projects"
          className="bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-400 transition-colors duration-300"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
