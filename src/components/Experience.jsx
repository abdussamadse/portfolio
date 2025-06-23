import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "TechNova Solutions",
    website: "https://technova.io",
    location: "Remote - USA",
    role: "Frontend Developer",
    duration: "Jan 2024 – Present",
    description:
      "Working on scalable React applications, collaborating with designers and backend developers to deliver responsive, performant UI.",
    stack: ["React", "TailwindCSS", "TypeScript", "Framer Motion"],
    current: true,
  },
  {
    company: "CodeCraft Inc.",
    website: "https://codecraft.dev",
    location: "Lahore, Pakistan",
    role: "Junior Web Developer",
    duration: "Aug 2022 – Dec 2023",
    description:
      "Maintained production websites, refactored legacy code, and built reusable components using modern frontend tooling.",
    stack: ["JavaScript", "React", "SCSS", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl border ${
                exp.current
                  ? "border-cyan-500 bg-gray-800"
                  : "border-gray-700 bg-gray-800/80"
              } hover:shadow-xl hover:shadow-cyan-600/10 transition-all`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} at{" "}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 underline underline-offset-2 hover:text-pink-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                </h3>
                <p className="text-sm text-gray-400">{exp.duration}</p>
              </div>
              <p className="text-sm text-gray-400 mb-2">{exp.location}</p>
              <p className="text-gray-300 mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-600/20 text-cyan-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
