import React from 'react';
import { motion } from 'framer-motion';
import {
  FaProjectDiagram,
  FaCogs,
  FaArrowsAltH,
  FaChartLine,
  FaUserTie,
  FaPiggyBank,
} from 'react-icons/fa';
import './StaffAugmentation.css';

const features = [
  {
    title: 'Agile Methodology',
    description:
      'We house a team of skilled web and mobile app developers, certified scrum masters, and product owners with an agile mindset working closely with our customers to maximize their business value and ROI.',
    icon: <FaProjectDiagram size={40} color="#007BFF" />,
  },
  {
    title: 'DevOps',
    description:
      'We assure you to deliver frequent and reliable feature releases for app development. We use DevOps for better collaboration, software quality, and shorter time to market.',
    icon: <FaCogs size={40} color="#007BFF" />,
  },
  {
    title: 'Flexibility',
    description:
      'Choose a model for staff augmentation for the amount of time you require. Our models are flexible enough to offer the best time frame as per your requirements.',
    icon: <FaArrowsAltH size={40} color="#007BFF" />,
  },
  {
    title: 'Scalability',
    description:
      'Our flexible workforce augmentation models allow you to add many team members as per your needs. Fortunesoft supports staffing resources for gaps or multiple individuals.',
    icon: <FaChartLine size={40} color="#007BFF" />,
  },
  {
    title: 'Expertise',
    description:
      'Our resource augmentation services offer certified experts in any area. We provide you with industry veterans that fit precisely with your project.',
    icon: <FaUserTie size={40} color="#007BFF" />,
  },
  {
    title: 'Cost Savings',
    description:
      'Hiring team members only when needed saves costs. This helps maximize ROI with minimal staff expenses such as salary, benefits, and so on.',
    icon: <FaPiggyBank size={40} color="#007BFF" />,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const StaffAugmentation = () => {
  return (
    <div className="container py-5">
      <motion.h2
        className="text-center mb-5 fw-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Makes Us Your Reliable IT Staff Augmentation Partner?
      </motion.h2>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="col d-flex"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="p-3 shadow-sm bg-white rounded d-flex align-items-start w-100 h-100">
              <div className="me-3 mt-1">{feature.icon}</div>
              <div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StaffAugmentation;
