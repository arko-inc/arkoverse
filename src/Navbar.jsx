import React, { useState } from 'react';
import './App.css'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 fixed top-0 left-0 w-full z-50 shadow-lg mx-1 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <img src="/path-to-your-logo.png" alt="Arkoverse Logo" className="w-10 h-10 object-contain hover:scale-110 transition-all duration-300" />

        {/* Desktop Menu */}
        <div className="md:flex hidden flex-grow justify-center space-x-8 ">
          <ul className="flex items-center space-x-8 text-sm font-semibold font-arko">
            <li><a href="#home" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Home</a></li>
            <li><a href="#about-me" className="hover:text-red-500 transition-all duration-300 hover:scale-110">About Me</a></li>
            <li><a href="#my-dreams" className="hover:text-red-500 transition-all duration-300 hover:scale-110">My Dreams</a></li>
            <li><a href="#projects" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black p-6 absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <ul className="space-y-8 text-center text-xl">
            <li><a href="#home" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Home</a></li>
            <li><a href="#about-me" className="hover:text-red-500 transition-all duration-300 hover:scale-110">About Me</a></li>
            <li><a href="#my-dreams" className="hover:text-red-500 transition-all duration-300 hover:scale-110">My Dreams</a></li>
            <li><a href="#projects" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition-all duration-300 hover:scale-110">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
