import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChartPie, FaSmile } from 'react-icons/fa';

const stats = [
  {
    icon: <FaUserGraduate className="text-4xl text-blue-800 mb-4" />,
    title: "10,000+ Students Taught",
    description: "Guiding students from class 6 to 12 in various streams and courses.",
  },
  {
    icon: <FaChartPie className="text-4xl text-blue-800 mb-4" />,
    title: "95% Board Exam Success",
    description: "Consistent high scores and conceptual clarity across all subjects.",
  },
  {
    icon: <FaSmile className="text-4xl text-blue-800 mb-4" />,
    title: "Top Ranks in Competitions",
    description: "Olympiads, NTSE, and other competitive exams cleared with confidence.",
  },
];


const Achievements = () => {
  return (
    <section className="bg-[#FDF7EB] py-16 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements & Impact
      </motion.h2>

      {/* Statistics Cards */}
      <div className="grid gap-8 md:grid-cols-3 text-center mb-16">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
