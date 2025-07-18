import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const linkClasses =
    "relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer font-medium before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-400 before:transition-all before:duration-300 hover:before:w-full";

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 top-0 left-0 px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={300}
          offset={-80}
          className="flex flex-col leading-tight items-start cursor-pointer group"
        >
          <span className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-105 transition-transform duration-300">
            AS
          </span>
          <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
            MERN Stack Developer
          </span>
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
                className={linkClasses}
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
                className={linkClasses}
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
