import React from 'react';
import { FaCalculator, FaFlask, FaBookOpen, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Mathematics",
    description: "Clear concepts from basic to advanced for school & board exams.",
    icon: <FaCalculator className="text-4xl text-blue-800 mb-4" />,
  },
  {
    title: "Science",
    description: "Physics, Chemistry & Biology explained in an engaging way.",
    icon: <FaFlask className="text-4xl text-blue-800 mb-4" />,
  },
  {
    title: "English Grammar",
    description: "Master grammar rules and improve writing skills.",
    icon: <FaBookOpen className="text-4xl text-blue-800 mb-4" />,
  },
  {
    title: "Competitive Exams",
    description: "Tailored preparation for NTSE, Olympiads, and more.",
    icon: <FaAward className="text-4xl text-blue-800 mb-4" />,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="bg-[#F7F9FC] py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Courses</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800">{course.title}</h3>
            </div>
            <p className="text-gray-700">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
