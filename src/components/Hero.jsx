import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img2.jpg'

const Hero = () => {
  return (
    <section id="hero"className="bg-[#FDF7EB] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to Divine Classes
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Quality education for every child. Building a brighter future, one student at a time.
        </motion.p>
        <a href="#courses" className="hidden md:block">
        <motion.button
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Explore Courses
        </motion.button>
        </a>
      </div>

      {/* Right Image */}
      <motion.img
        src={img}
        alt="Divine Classes"
        className="md:w-1/2 max-w-sm rounded shadow-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  );
};

export default Hero;
