// src/components/Home.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/portfolio"); // Navega a la página de portafolio
  };

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 50 }} // Inicia en baja opacidad y desplazado hacia abajo
      animate={{ opacity: 1, y: 0 }} // Anima a opacidad completa y posición original
      transition={{ duration: 0.8 }} // Duración de la animación
    >
      <h1>Bienvenido a Mi Portafolio</h1>
      <p>Explora mis proyectos y habilidades en la siguiente página.</p>
      <motion.button
        className="explore-button"
        whileHover={{ scale: 1.1 }} // Agranda el botón al pasar el mouse
        whileTap={{ scale: 0.9 }} // Efecto de clic al reducirse ligeramente
        onClick={handleButtonClick}
      >
        Ir a Portafolio
      </motion.button>
    </motion.div>
  );
}

export default Home;
