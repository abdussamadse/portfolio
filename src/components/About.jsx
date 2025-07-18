import React from 'react';
import { motion } from 'framer-motion';

// A placeholder for the AnimatedSection wrapper component.
// In your actual app, you would import this from its file.
const AnimatedSection = ({ id, children }) => (
  <section id={id} className="py-20 px-4 bg-gray-900 overflow-hidden">
    {children}
  </section>
);

// --- Animated Floating Code Component ---
const FloatingCode = () => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1, // Faster stagger for a quicker reveal
            },
        },
    };

    const lineVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    };

    const codeLines = [
        { text: "<developer>", color: "#808080" },
        { text: "  .name(\"Abdus Samad\")", color: "#e06c75" },
        { text: "  .status(\"Coffee Fueled\")", color: "#d19a66" },
        { text: "  .skills([", color: "#c678dd" },
        { text: "    \"React\", \"Node.js\",", color: "#98c379" },
        { text: "    \"MongoDB\", \"Express\"", color: "#98c379" },
        { text: "  ])", color: "#c678dd" },
        { text: "  .build()", color: "#61afef" },
        { text: "  .deploy(\"production\");", color: "#56b6c2" },
        { text: "</developer>", color: "#808080" },
    ];

    return (
        <motion.div
            className="w-full max-w-md mx-auto p-6 bg-gray-800/50 rounded-xl shadow-2xl"
            style={{ perspective: 1200 }} // Increase perspective for a better 3D effect
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ rotateY: -8, rotateX: 6, scale: 1.05, boxShadow: "0px 15px 30px rgba(0, 255, 255, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="font-mono text-sm relative"
            >
                {codeLines.map((line, index) => (
                    <motion.p
                        key={index}
                        variants={lineVariants}
                        className="whitespace-pre"
                        style={{ color: line.color, textShadow: `0 0 8px ${line.color}33` }} // Add a subtle glow to text
                    >
                        {line.text}
                    </motion.p>
                ))}
                
                {/* Blinking Cursor */}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-20 bottom-1 w-0.5 h-4 bg-cyan-400"
                />
            </motion.div>
        </motion.div>
    );
};


const About = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-6xl mx-auto">
        {/* Text Content */}
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-lg text-gray-300 leading-relaxed text-center lg:text-left"
        >
          <p className="mb-4">
            I'm a passionate and driven developer with a knack for creating
            dynamic and user-friendly web applications. With a strong foundation
            in the MERN stack, I love bringing ideas to life through code.
          </p>
          <p>
            My goal is to continuously learn and grow in the ever-evolving tech
            landscape, crafting solutions that are not only functional but also
            provide a great user experience.
          </p>
        </motion.div>

        {/* Animated Graphic */}
        <div className="flex items-center justify-center lg:w-full h-80">
            <FloatingCode />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
