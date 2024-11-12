// src/components/Header.js
import React, { useState } from "react";
import "../styles/Header.css";
import logoImage from "../assets/Logo blanco.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header({ activeSection, onSectionClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para manejar el clic en un elemento del menú y cerrar el menú si está abierto
  const handleMenuItemClick = (sectionId) => {
    onSectionClick(sectionId); // Llamar a la función para activar animación en la sección
    if (isMenuOpen) setIsMenuOpen(false); // Cerrar el menú en dispositivos móviles
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("about")}
        >
          <i className="fas fa-user"></i>
          <span>Sobre mí</span>
        </a>
        <a
          href="#skills"
          className={`nav-item ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("skills")}
        >
          <i className="fas fa-laptop-code"></i>
          <span>Habilidades</span>
        </a>
        <a
          href="#trayectoria"
          className={`nav-item ${
            activeSection === "trayectoria" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("trayectoria")}
        >
          <i className="fas fa-briefcase"></i>
          <span>Trayectoria</span>
        </a>
        <a
          href="#proyectos"
          className={`nav-item ${
            activeSection === "proyectos" ? "active" : ""
          }`}
          onClick={() => handleMenuItemClick("proyectos")}
        >
          <i className="fas fa-folder"></i>
          <span>Proyectos</span>
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleMenuItemClick("contact")}
        >
          <i className="fas fa-envelope"></i>
          <span>Contacto</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
