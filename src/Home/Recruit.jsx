import React from "react";
import "./Recruit.css";
import Footer from "./Footer";
import {
  FaUserCog,
  FaProjectDiagram,
  FaBinoculars,
  FaRegEye,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Process Steps
const processSteps = [
  {
    icon: <FaUserCog />,
    title: "Recruitment Planning",
    description: "We identify the needs and define the role requirements clearly.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Strategy Development",
    description: "We plan sourcing methods and recruitment timeline.",
  },
  {
    icon: <FaBinoculars />,
    title: "Searching",
    description: "We tap into multiple channels to find ideal candidates.",
  },
  {
    icon: <FaRegEye />,
    title: "Screening",
    description: "We assess and shortlist the right talents.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Evaluation & Control",
    description: "We evaluate performance and ensure role alignment.",
  },
];

const RecruitmentProcess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <div className="recruitment-section" ref={ref}>
        <h2 className="section-heading text-center">Our Recruitment Process</h2>
        <div className="cards-wrapper">
          {processSteps.map((step, index) => (
            <motion.div
              className="process-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="icon-wrapper">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </motion.div>
          ))}

          {/* Optional curved connector */}
          <svg className="connector-lines" viewBox="0 0 1000 100">
            <path
              d="M0,50 Q250,0 500,50 T1000,50"
              stroke="#ccc"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentProcess;
