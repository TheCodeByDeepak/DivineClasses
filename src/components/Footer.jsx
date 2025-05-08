import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-20">
      {/* Main Heading & Subheading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Divine Classes</h2>
        <p className="text-lg text-blue-100 mt-2">Inspiring Learning, Achieving Dreams</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-6">
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
  <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
  <p className="mb-2">Divine Classes, Your Path to Academic Excellence</p>
  <p>
    Email: 
    <a 
      href="mailto:info@divineclasses.org" 
      className="text-white hover:text-blue-500 transition-colors duration-300 ml-2"
    >
      info@divineclasses.org
    </a>
  </p>
  <p>
    Phone: 
    <a 
      href="tel:+918888444418" 
      className="text-white hover:text-blue-500 transition-colors duration-300 ml-2"
    >
      +91-88884 44418
    </a>
  </p>
</div>


        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-blue-300 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Note */}
     {/* Footer Bottom Note */}
<div className="text-center text-sm text-gray-300 border-t border-gray-700 pt-4 space-y-1">
  <p>© {new Date().getFullYear()} Divine Classes. All rights reserved.</p>
  <p>
    A project by <a
      href="https://thecodebydeepak.github.io/QuickInnovation/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-200 underline hover:text-white transition"
    >Quick Innovation</a>, developed by <a
      href="https://github.com/TheCodeByDeepak"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-200 underline hover:text-white transition"
    >TheCodeByDeepak</a>.
  </p>
</div>

    </footer>
  );
};

export default Footer;
