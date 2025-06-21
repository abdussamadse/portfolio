import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-4">
        {/* Text Content */}
        <div className="lg:w-1/2 text-lg text-gray-300 leading-relaxed">
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
        </div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <img
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            alt="Developer illustration"
            className="rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-shadow duration-300 h-[400px] w-[400px]"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
