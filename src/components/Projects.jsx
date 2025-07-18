import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const featuredProjects = [
  {
    title: "Venue Booking Platform (Wedding Venues)",
    description:
      "Developed a full-featured wedding venue booking platform with role-based access for customers and venue hosts. Implemented secure user authentication, host subscription plans with Stripe integration, and dynamic venue listings. Designed and built the backend architecture, including RESTful APIs for user management, booking logic, payment processing, and review systems. The application supports host dashboards, venue management, real-time availability, and automated email confirmations.",
    imageUrl:
      "https://res.cloudinary.com/doy45osdh/image/upload/v1752852726/venwed_tsojwi.png",
    tags: ["React JS", "Tailwind CSS", "Express JS", "MongoDB", "Stripe"],
    liveUrl: "https://client.venuhost.com",
    githubUrl: "https://github.com/abdussamadse",
  },
  {
    title: "Exam builder (Question hub)",
    description:
      "Built an exam management platform for teachers to create and organize question banks by subject. Enabled teachers to add, edit, and categorize questions, then dynamically generate question papers by selecting from the question pool. Implemented features to save, preview, and download question papers in both PDF and DOCX formats using backend export tools. Backend handled all business logic for question grouping, pagination, and export-ready formatting.",
    imageUrl:
      "https://res.cloudinary.com/doy45osdh/image/upload/v1752852715/exambuilder_cp6nby.png",
    tags: [
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express JS",
      "HTML-to-PDF/Doc Libraries",
    ],
    liveUrl: "https://exambuilder.org/",
    githubUrl: "https://github.com/abdussamadse",
  },
];

const otherProjects = [
  {
    title: "Webpage to HTML/PDF Converter",
    description:
      "Developed a web utility that allows users to convert any public webpage URL into downloadable HTML or PDF formats. Utilized Puppeteer and custom export logic to capture dynamic web content and render it in clean downloadable formats. Built backend services for URL validation, conversion processing, and download management. Implemented a user history feature to track previously converted pages and re-download files easily.",
    imageUrl:
      "https://res.cloudinary.com/doy45osdh/image/upload/v1752852714/archivevault_tquv2s.png",
    tags: [
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express JS",
      "HTML-to-PDF/Doc Libraries",
    ],
    liveUrl: "http://archivevault.org",
    githubUrl: "https://github.com/abdussamadse",
  },
  {
    title: "Real Estate Investment Platform",
    description:
      "Created a platform for a real estate company where users can invest in, buy, and sell properties, and earn profits based on their investments. Developed secure role-based access for investors and admins, with dynamic dashboards showing ROI, active investments, and property portfolios.",
    imageUrl:
      "https://res.cloudinary.com/doy45osdh/image/upload/v1752852715/pride_my4mzd.png",
    tags: ["React JS", "Tailwind CSS", "Express JS", "MongoDB"],
    liveUrl: "https://synergyinvestinc.com/",
    githubUrl: "https://github.com/abdussamadse",
  },
  {
    title: "Smart Household E-Commerce Platform",
    description:
      "Developed an e-commerce platform that allows users to create personalized monthly or weekly household shopping lists and receive scheduled deliveries. Users can manage recurring orders, update preferences, and track delivery history through a simple, intuitive interface. Implemented features for subscription-based purchases, smart cart suggestions, and automated reminders. Built robust backend APIs for user management, product inventory, order scheduling, and integrated Stripe for secure recurring payments.",
    imageUrl:
      "https://res.cloudinary.com/doy45osdh/image/upload/v1752852722/ecommerce_thdmj6.png",
    tags: ["React JS", "Tailwind CSS", "Stripe"],
    liveUrl: "https://kitchcubesclient.netlify.app",
    githubUrl: "https://github.com/abdussamadse",
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
        My Projects (Client's Work)
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
                    <FaGithub /> Code (Private repo)
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
                    <FaGithub /> Code (Private repo)
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
