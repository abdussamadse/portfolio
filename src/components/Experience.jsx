import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Softvence Agency",
    website: "https://softvence.agency",
    location: "Mohakhali, Dhaka - Bangladesh",
    role: "Jr. MERN Stack Developer",
    duration: "Sep 2024 – Present",
    description:
      "As a Full Stack Developer at Softvence Agency, I lead the development and maintenance of dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I work closely with cross-functional teams to design, develop, test, and deploy scalable solutions that meet business needs.",
    stack: ["React", "TailwindCSS", "TypeScript", "Next.js", "Node.js", "Express.js", "MongoDB"],
    current: true,
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
