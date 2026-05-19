import React from "react";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCogs,
  FaArrowsAltH,
  FaChartLine,
  FaUserTie,
  FaPiggyBank,
} from "react-icons/fa";
import "./StaffAugmentation.css";

const features = [
  {
    title: "Agile Methodology",
    description:
      "We house a team of skilled web and mobile app developers, certified scrum masters, and product owners with an agile mindset working closely with our customers to maximize their business value and ROI.",
    icon: <FaProjectDiagram size={36} color="#007BFF" />,
  },
  {
    title: "DevOps",
    description:
      "We assure you to deliver frequent and reliable feature releases for app development. We use DevOps for better collaboration, software quality, and shorter time to market.",
    icon: <FaCogs size={36} color="#007BFF" />,
  },
  {
    title: "Flexibility",
    description:
      "Choose a model for staff augmentation for the amount of time you require. Our models are flexible enough to offer the best timeframe as per your requirements.",
    icon: <FaArrowsAltH size={36} color="#007BFF" />,
  },
  {
    title: "Scalability",
    description:
      "Our flexible workforce augmentation models allow you to add many team members as per your needs. We support staffing resources for gaps or multiple individuals.",
    icon: <FaChartLine size={36} color="#007BFF" />,
  },
  {
    title: "Expertise",
    description:
      "Our resource augmentation services offer certified experts in any area. We provide industry veterans that fit precisely with your project.",
    icon: <FaUserTie size={36} color="#007BFF" />,
  },
  {
    title: "Cost Savings",
    description:
      "Hiring team members only when needed saves costs. This helps maximize ROI with minimal staff expenses such as salary and benefits.",
    icon: <FaPiggyBank size={36} color="#007BFF" />,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const StaffAugmentation = () => {
  return (
    <section className="staff-augmentation-section">
      <div className="staff-augmentation-container">
        <motion.h2
          className="staff-augmentation-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Makes Us Your Reliable IT Staff Augmentation Partner?
        </motion.h2>

        <div className="staff-card-row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="staff-card-col"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="staff-card">
                <div className="staff-card-icon">
                  {feature.icon}
                </div>

                <div className="staff-card-content">
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffAugmentation;