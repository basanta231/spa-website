import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* About & Legal Sections */}
        <div className="flex justify-between w-full">
          
          {/* About Section */}
          <div className="text-left">
            <h3 className="font-semibold uppercase mb-3">About</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Spa Services</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="text-right">
            <h3 className="font-semibold uppercase mb-3">Legal</h3>
            <ul className="flex space-x-5">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Address & Working Hours */}
      <div className="text-center mt-4 text-sm">
        <p> Birauta-17, Pokhara, Nepal</p>
        <p> 24 Hours for your services.</p>
      </div>

      {/* Copyright & Social Media */}
      <div className="border-t border-gray-500 mt-4 pt-3 text-center text-xs">
        <p>© All Rights Reserved 2025 | SoftUp Spa.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

