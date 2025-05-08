import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#FDF7EB] shadow-md p-6 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">DIVINE CLASSES</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-blue-900 font-medium">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#about" className="hover:underline">About Us</a></li>
        </ul>

        <a href="#contact" className="hidden md:block">
          <button className="bg-blue-900 text-white px-4 py-2 rounded">Get in Touch</button>
        </a>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-blue-900 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-[#FDF7EB] border-t border-gray-200">
          <ul className="flex flex-col space-y-4 text-blue-900 font-medium">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#courses" onClick={closeMenu}>Courses</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                <button className="w-full bg-blue-900 text-white py-2 rounded">Get in Touch</button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
