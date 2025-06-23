import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: 'experience', label: 'Experience' },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 top-0 left-0 px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={300}
          offset={-80}
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
        >
          AbdusSamad
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={300}
                offset={-80}
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={toggleMenu}
          className="md:hidden z-10 text-2xl cursor-pointer text-gray-200"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            isOpen
              ? "absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          {navLinks.map((link) => (
            <li key={link.to} className="py-6 text-4xl">
              <Link
                onClick={toggleMenu}
                to={link.to}
                smooth={true}
                duration={300}
                offset={-80}
                className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
