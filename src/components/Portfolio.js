// src/components/Portfolio.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Trayectoria from "./Trayectoria";
import Proyectos from "./Projects";
import Contacto from "./Contact";
import Footer from "./Footer";
import "../styles/App.css"; // Asegúrate de ajustar la ruta si es necesario

function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [animateSections, setAnimateSections] = useState({
    about: false,
    skills: false,
    trayectoria: false,
    proyectos: false,
    contact: false,
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
          setAnimateSections((prev) => ({
            ...prev,
            [sectionId]: true,
          }));
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleHeaderClick = (sectionId) => {
    setActiveSection(sectionId);
    setAnimateSections((prev) => ({
      ...prev,
      [sectionId]: true,
    }));
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Header
        activeSection={activeSection}
        onSectionClick={handleHeaderClick}
      />
      <div className="scrollable-content">
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={animateSections.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <About />
        </motion.div>
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 30 }}
          animate={animateSections.skills ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
        <motion.div
          id="trayectoria"
          initial={{ opacity: 0, y: 30 }}
          animate={animateSections.trayectoria ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Trayectoria />
        </motion.div>
        <motion.div
          id="proyectos"
          initial={{ opacity: 0, y: 30 }}
          animate={animateSections.proyectos ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Proyectos />
        </motion.div>
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          animate={animateSections.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Contacto />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
