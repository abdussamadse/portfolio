import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Abdus Samad
            </span>
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
            className="text-2xl md:text-3xl text-gray-400 mb-8"
            repeat={Infinity}
          />
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            I specialize in building exceptional, high-quality websites and
            applications.
          </p>
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-500 hover:bg-cyan-500"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Right Section - SVG with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src={HeroImg}
            alt="Web Development Illustration"
            className="w-72 md:w-96 h-auto"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
