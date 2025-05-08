import React from 'react';
import { motion } from 'framer-motion';
import stu1 from '../assets/stu1.png'
import stu2 from '../assets/stu2.png'
import stu3 from '../assets/stu3.png'

const testimonials = [
  {
    name: "Anita Sharma",
    feedback: "Divine Classes completely transformed the way I understand math and science. The teaching style is just amazing!",
    image: stu1,
  },
  {
    name: "Rahul Verma",
    feedback: "I was struggling with English grammar, but the tutors here made everything so easy to grasp. Highly recommend!",
    image:  stu2,
  },
  {
    name: "Sneha Patel",
    feedback: "The support and resources at Divine Classes helped me clear my Olympiad with confidence.",
    image:  stu3,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-6 md:px-20 text-center">
      <motion.h2
        className="text-3xl font-bold text-blue-900 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        What Our Students Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#FDF7EB] p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-yellow-500"
            />
            <p className="text-gray-800 mb-4 italic">"{testimonial.feedback}"</p>
            <h4 className="text-blue-900 font-semibold">{testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
