import React from 'react';
import './StaffServices.css'; 
import { motion } from 'framer-motion';

const services = [
  {
    title: "Onsite Service",
    description:
      "We provide skilled professionals to work directly at the client’s office to facilitate seamless coordination with the internal team and ensure project success.",
    icon: "🧑‍💼",
  },
  {
    title: "Remote Services",
    description:
      "We offer remote access to qualified experts to enable flexibility in teams and allow hiring across India for better project execution.",
    icon: "💻",
  },
  {
    title: "IT Consulting Services",
    description:
      "Specialized IT resource and staff augmentation solutions with expert consultation tailored to your tech requirements.",
    icon: "🧠",
  },
  {
    title: "Temporary Staffing Services",
    description:
      "We provide temporary professionals for specific roles or projects, offering flexibility without the burden of permanent staffing.",
    icon: "📋",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const StaffServices = () => {
  return (
    <section className="services-section">
      <h2>
        Services of Staff <span className="highlight">Augmentation</span>
      </h2>
      <div className="card-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            custom={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="icon" role="img" aria-label={service.title}>{service.icon}</div>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StaffServices;
