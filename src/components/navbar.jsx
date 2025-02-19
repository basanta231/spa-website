import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#798d50] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-itallic font-bold text-white ">SoftUp Spa</h1>
        <ul className="text-2xl orpheuspro serif flex space-x-10 text-white">
          <li><Link to="/" className="hover:bg-[#6B8E23]">Home</Link></li>
          <li><Link to="/services" className="hover:bg-[#6B8E23]">Services</Link></li>
          <li><Link to="/gallery" className="hover:bg-[#6B8E23]">Gallery</Link></li>
          <li><Link to="/about" className="hover:bg-[#6B8E23]">About</Link></li>
          <li><Link to="/contact" className="hover:bg-[#6B8E23]">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
