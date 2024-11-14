// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import "../styles/Header.css";
import logoImage from "../assets/Logo blanco.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header({ activeSection, onSectionClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Function to toggle the menu state
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // Function to handle menu item click and close the menu if it's open
  const handleMenuItemClick = (sectionId) => {
    onSectionClick(sectionId); // Call the function to activate animation in the section
    if (isMenuOpen) setIsMenuOpen(false); // Close the menu on mobile devices
  };

  return (
    <header className="header">
      <motion.div
        className="logo"
        whileHover={{ scale: 1.1 }} // Hover effect on the logo
        whileTap={{ scale: 0.9 }} // Click effect on the logo
      >
        <Link to="/">
          <motion.img
            src={logoImage}
            alt="Logo"
            className="logo-image"
            initial={{ opacity: 0, y: -20 }} // Start with low opacity and shifted up
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5 }} // Duration of the entrance animation
          />
        </Link>
      </motion.div>
      {/* <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div> */}
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("about")}
        >
          <i className="fas fa-user"></i>
          <span>About Me</span>
        </a>
        <a
          href="#skills"
          className={`nav-item ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("skills")}
        >
          <i className="fas fa-laptop-code"></i>
          <span>Skills</span>
        </a>
        <a
          href="#experience"
          className={`nav-item ${
            activeSection === "experience" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("experience")}
        >
          <i className="fas fa-briefcase"></i>
          <span>Career</span>
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("projects")}
        >
          <i className="fas fa-folder"></i>
          <span>Projects</span>
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("contact")}
        >
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
