import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-950 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">TechCorp</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          <div>
            <a
              href="#"
              className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
