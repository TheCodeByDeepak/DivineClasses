import React from 'react';
import { FaUser, FaSeedling, FaHandshake, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaUser className="text-yellow-600 text-3xl mb-2" />,
    title: "Personalized Attention",
  },
  {
    icon: <FaSeedling className="text-yellow-600 text-3xl mb-2" />,
    title: "Motivational Start to Class",
  },
  {
    icon: <FaHandshake className="text-yellow-600 text-3xl mb-2" />,
    title: "Parent Teacher Interaction",
  },
  {
    icon: <FaStar className="text-yellow-600 text-3xl mb-2" />,
    title: "Gamified Learning",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-[#FCF8F1] py-12 px-6 md:px-20 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Divine Classes
      </motion.h2>

      <motion.p
        className="text-gray-700 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Divine Classes provides guidance through a highly sensitive system, aiming to guide students spiritually and academically in a wholesome manner.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-blue-900">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
