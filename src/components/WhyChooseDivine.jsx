import React from 'react';
import { FaUserTie, FaQuestionCircle, FaChartLine, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaUserTie className="text-4xl text-blue-800 mb-4" />,
    title: 'Customized Mentorship',
    description: 'One-on-one guidance tailored to every student’s learning path.',
  },
  {
    icon: <FaQuestionCircle className="text-4xl text-blue-800 mb-4" />,
    title: 'Doubt-Clearing Sessions',
    description: 'Regular sessions to address student queries and reinforce clarity.',
  },
  {
    icon: <FaChartLine className="text-4xl text-blue-800 mb-4" />,
    title: 'Student Progress Tracking',
    description: 'We continuously monitor and assess academic progress.',
  },
  {
    icon: <FaUsers className="text-4xl text-blue-800 mb-4" />,
    title: 'Parent-Teacher Interactions',
    description: 'Open communication channels for regular updates and feedback.',
  },
];

const WhyChooseDivine = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
        Why Choose Divine?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#F7F9FC] p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseDivine;
