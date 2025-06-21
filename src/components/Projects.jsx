import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProjects = [
  {
    title: "DevLink – Developer Portfolio Hub",
    description:
      "A modern portfolio builder platform for developers to showcase their work with custom domains and responsive templates.",
    imageUrl:
      "https://designmodo.com/wp-content/uploads/2025/03/website-pages.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://devlink-demo.com",
    githubUrl: "https://github.com/yourname/devlink",
  },
  {
    title: "TaskFlow – Team Collaboration App",
    description:
      "A Trello-like project management app supporting team tasks, drag-and-drop boards, and real-time updates.",
    imageUrl: "https://media.nngroup.com/media/editor/2024/03/12/16.jpg",
    tags: ["React", "Node.js", "Socket.IO"],
    liveUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/yourname/taskflow",
  },
];

const otherProjects = [
  {
    title: "FitTrack",
    description:
      "Track workouts and fitness progress with this full-stack MERN app.",
    imageUrl:
      "https://designmodo.com/wp-content/uploads/2025/03/website-pages.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "BlogNest",
    description:
      "A personal blogging platform with Markdown support and custom themes.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6qDM7ToP3w5sADPvj8kPLPE1k1qGbg3qKw&s",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "QuickChart",
    description: "Create and share beautiful charts on the fly.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDCaD3gMUCdNTeIqfJBuWRmx8yjkCWS1kuA&s",
    tags: ["Chart.js", "Vite", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevJobs",
    description:
      "A job board web app tailored for developers with filtering and location support.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6qDM7ToP3w5sADPvj8kPLPE1k1qGbg3qKw&s",
    tags: ["React", "Tailwind", "JSON Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevJobs",
    description:
      "A job board web app tailored for developers with filtering and location support.",
    imageUrl: "https://media.nngroup.com/media/editor/2024/03/12/16.jpg",
    tags: ["React", "Tailwind", "JSON Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        My Projects
      </h2>

      {/* Featured Projects */}
      <section className="mb-24">
        <h3 className="text-3xl font-semibold mb-10 text-cyan-300">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-400/30 transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-cyan-200">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-gray-700 text-cyan-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-2">
                  <a
                    href={project.liveUrl}
                    className="text-cyan-400 flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-cyan-400 flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h3 className="text-3xl font-semibold mb-10 text-cyan-300">
          Other Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-400/20 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold text-cyan-100 mb-1">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-700 text-cyan-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-4 mt-auto text-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-cyan-400 flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-cyan-400 flex items-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
