// src/components/Footer.js
import React from "react";
import "../styles/App.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#trayectoria">Trayectoria</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
      <p>© 2024. Diseñado por Juan Higuera Mohedano.</p>
    </footer>
  );
}

export default Footer;
