import React from "react";
import { motion } from "framer-motion";
import "./TechStack.css";

import ReactIcon from "../Images/Icon/React.png";
import AngularIcon from "../Images/Icon/Angular.png";
import VueIcon from "../Images/Icon/vue.png";
import FlutterIcon from "../Images/Icon/flutter.png";
import EmberIcon from "../Images/Icon/express.png";
import BootstrapIcon from "../Images/Icon/bootstrap.png";

import NodeIcon from "../Images/Icon/node.png";
import ExpressIcon from "../Images/Icon/express.png";
import GoIcon from "../Images/Icon/Go.png";
import JavaIcon from "../Images/Icon/java.png";
import PythonIcon from "../Images/Icon/python.png";
import PhpIcon from "../Images/Icon/php.png";

const techStack = {
  frontend: [
    { name: "React", icon: ReactIcon },
    { name: "Angular", icon: AngularIcon },
    { name: "Vue.js", icon: VueIcon },
    { name: "Flutter", icon: FlutterIcon },
    { name: "Ember.js", icon: EmberIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
  ],

  backend: [
    { name: "Node.js", icon: NodeIcon },
    { name: "Express.js", icon: ExpressIcon },
    { name: "GoLang", icon: GoIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Python", icon: PythonIcon },
    { name: "PHP", icon: PhpIcon },
  ],
};

const TechStack = () => {
  return (
    <div className="techstack-container">
      <motion.h2
        className="techstack-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hire Our Tech Experts
      </motion.h2>

      <p className="techstack-subheading">
        Our seasoned developers have expertise with the following tech stacks:
      </p>

      {/* Frontend */}
      <div className="tech-section">
        <h3 className="tech-title">
          Front-End Technologies
        </h3>

        <div className="tech-grid">
          {techStack.frontend.map((tech, idx) => (
            <motion.div
              key={idx}
              className="techstack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="techstack-icon"
              />
              <span className="techstack-text">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="tech-section">
        <h3 className="tech-title">
          Back-End Technologies
        </h3>

        <div className="tech-grid">
          {techStack.backend.map((tech, idx) => (
            <motion.div
              key={idx}
              className="techstack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="techstack-icon"
              />
              <span className="techstack-text">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;