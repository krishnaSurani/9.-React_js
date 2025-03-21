import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black bg-opacity-50 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-5">
        
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold" style={{ fontFamily: '"Big Shoulders Stencil", sans-serif' }}>
          KS
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`absolute md:flex md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row md:space-x-0 text-md transition-all duration-300 ${
  menuOpen ? "block" : "hidden"
}`}>
        
          <li><Link to="/" className="block py-3 px-6 text-yellow-400 hover:text-white">HOME</Link></li>
          <li><Link to="/About" className="block py-3 px-6 hover:text-yellow-400">ABOUT</Link></li>
          <li><Link to="/Resume" className="block py-3 px-6 hover:text-yellow-400">RESUME</Link></li>
          <li><Link to="/Work" className="block py-3 px-6 hover:text-yellow-400">PORTFOLIO</Link></li>
          <li><Link to="/" className="block py-3 px-6 hover:text-yellow-400">BLOG</Link></li>
          <li><Link to="/Contact" className="block py-3 px-6 hover:text-yellow-400">CONTACT</Link></li>
        </ul>

        {/* Contact Info (Desktop Only) */}
        <div className="hidden md:block text-yellow-400 font-semibold">
          +91 9974477226
        </div>
      </div>
    </header>
  );
}
