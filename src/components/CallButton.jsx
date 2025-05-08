import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const CallButton = () => {
  return (
    <a
      href="tel:+919876543210" // Replace with your actual number
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition"
      aria-label="Call us"
    >
      <FaPhoneAlt />
    </a>
  );
};

export default CallButton;
