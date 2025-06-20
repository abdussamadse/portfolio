// src/components/Skills.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaGitAlt />, name: 'Git' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Skills</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-400/20 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl text-cyan-400 mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;