// src/components/Projects.jsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Replace with your actual project data
const projectData = [
  {
    title: 'Project One',
    description: 'A brief description of the project, highlighting its main features and the problem it solves.',
    imageUrl: 'https://via.placeholder.com/500x300.png?text=Project+Image',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Project Two',
    description: 'Another amazing project showcasing my skills in modern web development technologies.',
    imageUrl: 'https://via.placeholder.com/500x300.png?text=Project+Image',
    tags: ['Next.js', 'MongoDB', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    title: 'Project Three',
    description: 'This project demonstrates my ability to work with APIs and create interactive user interfaces.',
    imageUrl: 'https://via.placeholder.com/500x300.png?text=Project+Image',
    tags: ['Vite', 'Express', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-shadow duration-300 flex flex-col"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-cyan-300 mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex justify-end space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;