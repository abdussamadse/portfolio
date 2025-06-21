import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";

const frontendSkills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const backendSkills = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPrisma />, name: "Prisma" },
];

const toolSkills = [{ icon: <FaGitAlt />, name: "Git" }];

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

const SkillSection = ({ title, skills }) => (
  <div>
    <h3 className="text-2xl font-semibold text-cyan-300 mb-6 text-center md:text-left">
      {title}
    </h3>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-6"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-cyan-400/20 hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl text-cyan-400 mb-2">{skill.icon}</div>
          <p className="text-base font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
        <SkillSection title="Tools & Others" skills={toolSkills} />
      </div>
    </AnimatedSection>
  );
};

export default Skills;
