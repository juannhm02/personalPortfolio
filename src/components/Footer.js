// src/components/Footer.js
import React from "react";
import "../styles/App.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#trayectoria">Career</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <p>© 2024. Designed by Juan Higuera Mohedano.</p>
    </footer>
  );
}

export default Footer;
