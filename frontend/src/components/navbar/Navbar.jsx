import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-inherit shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Title */}
          <div className="text-white text-2xl font-bold">Kartikarora.tech</div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="https://www.linkedin.com/in/kartikarora5832/" className="text-white hover:text-green-300">
              Linkedin
            </a>
            <a href="https://github.com/BowlPulp" className="text-white hover:text-green-300">
              Github
            </a>
            <a href="https://leetcode.com/u/BowlPulp/" className="text-white hover:text-green-300">
              Leetcode
            </a>
            <a href="https://monkeytype.com/profile/BowlPulp" className="text-white hover:text-green-300">
              MonkeyType
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-x-4">
            <a href="https://www.linkedin.com/in/kartikarora5832/" className="text-white hover:text-green-300">
              Linkedin
            </a>
            <a href="https://github.com/BowlPulp" className="text-white hover:text-green-300">
              Github
            </a>
            <a href="https://leetcode.com/u/BowlPulp/" className="text-white hover:text-green-300">
              Leetcode
            </a>
            <a href="https://monkeytype.com/profile/BowlPulp" className="text-white hover:text-green-300">
              MonkeyType
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
