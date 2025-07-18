import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeroImg from "../assets/hero.svg";

// Define animation variants for cleaner JSX
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animate children one after another
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "circOut",
    },
  },
};

// Define the typing animation sequence as a constant
const typingSequence = [
  "A Full Stack Developer",
  2000,
  "A MERN Stack Specialist",
  2000,
  "A Creative Problem Solver",
  2000,
];

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl gap-12 pt-28 sm:pt-0">
        {/* Left Section - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Abdus Samad
            </span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl text-gray-400 mb-8"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
          >
            I specialize in building exceptional, high-quality websites and
            applications.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.3)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 hover:bg-cyan-500"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Right Section - SVG with Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <motion.img
            src={HeroImg}
            alt="Web Development Illustration"
            className="w-72 md:w-96 h-auto"
            animate={{ y: [0, -15, 0] }} // A slightly more pronounced float
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