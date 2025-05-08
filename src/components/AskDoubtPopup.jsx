import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

const AskDoubtPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doubt, setDoubt] = useState('');
  const [message, setMessage] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setDoubt('');
    setMessage(''); // Clear message when closing the popup
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display default message on successful submission
    setMessage('If you need immediate assistance, please contact our team!');
    console.log('Doubt Submitted:', doubt);
    // Optionally close the popup after a short delay
    setTimeout(() => togglePopup(), 3000); // Closes after 3 seconds
  };

  return (
    <div className="fixed bottom-40 right-6 z-50">
      <button
        className="bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={togglePopup}
      >
        <FaQuestionCircle className="text-2xl" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-40 right-6 bg-white p-6 rounded-lg shadow-xl w-80 z-50"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Ask a Doubt</h3>
            {message && (
              <p className="text-green-600 font-semibold mb-4">{message}</p> // Display the message
            )}
            <form onSubmit={handleSubmit}>
              <textarea
                rows="4"
                value={doubt}
                onChange={(e) => setDoubt(e.target.value)}
                placeholder="Type your doubt here..."
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AskDoubtPopup;
