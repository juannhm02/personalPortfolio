// src/components/Skills.js
import React, { useEffect, useState } from "react";

function Skills() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);
  const [displayedImages, setDisplayedImages] = useState([]);

  // Genera una lista de imágenes en orden aleatorio
  const images = [
    require("../assets/skills/slide1.jpg"),
    require("../assets/skills/slide2.jpg"),
    require("../assets/skills/slide3.jpg"),
    require("../assets/skills/slide4.jpg"),
    require("../assets/skills/slide5.jpg"),
    require("../assets/skills/slide6.jpg"),
    require("../assets/skills/slide7.jpg"),
    require("../assets/skills/slide8.jpg"),
    require("../assets/skills/slide9.jpg"),
    require("../assets/skills/slide10.jpg"),
    require("../assets/skills/slide11.jpg"),
    require("../assets/skills/slide12.jpg"),
    require("../assets/skills/slide13.jpg"),
    require("../assets/skills/slide14.jpg"),
    require("../assets/skills/slide15.jpg"),
    require("../assets/skills/slide16.jpg"),
    require("../assets/skills/slide17.jpg"),
    require("../assets/skills/slide18.jpg"),
    require("../assets/skills/slide19.jpg"),
    require("../assets/skills/slide20.jpg"),
    require("../assets/skills/slide21.jpg"),
    require("../assets/skills/slide22.jpg"),
    require("../assets/skills/slide23.jpg"),
  ];

  // Inicializa el array de imágenes aleatorias
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    setDisplayedImages([]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Si hemos mostrado todas las imágenes, reinicia el ciclo con un nuevo orden aleatorio
        if (displayedImages.length === images.length) {
          const newShuffled = [...images].sort(() => Math.random() - 0.5);
          setShuffledImages(newShuffled);
          setDisplayedImages([newShuffled[0]]);
          return 0;
        }

        // Avanza al siguiente índice y registra la imagen mostrada
        const nextIndex = (prevIndex + 1) % shuffledImages.length;
        setDisplayedImages([...displayedImages, shuffledImages[nextIndex]]);
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [shuffledImages, displayedImages]);

  return (
    <section id="skills" className="skills-section fade-in">
      <div className="skills-container">
        {/* Sección de habilidades a la izquierda */}
        <div className="skills-content">
          <h2>Skills</h2>

          <div className="category">
            <h3>Lenguajes de Programación y Frameworks</h3>
            <div className="badges">
              <img
                src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
                alt="Java"
              />
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
              />
              <img
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
              />
              <img
                src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"
                alt="C"
              />
              <img
                src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                alt="C++"
              />
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="NodeJS"
              />
              <img
                src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
                alt="NestJS"
              />
              <img
                src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                alt="Python"
              />
              <img
                src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
                alt="Django"
              />
            </div>
          </div>

          <div className="category">
            <h3>Bases de Datos</h3>
            <div className="badges">
              <img
                src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                alt="MySQL"
              />
              <img
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MongoDB"
              />
              <img
                src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
                alt="MariaDB"
              />
            </div>
          </div>

          <div className="category">
            <h3>Herramientas y Otros</h3>
            <div className="badges">
              <img
                src="https://img.shields.io/badge/Sublime_Text-FF9800?style=for-the-badge&logo=sublime-text&logoColor=white"
                alt="Sublime Text"
              />
              <img
                src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
                alt="VSCode"
              />
              <img
                src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
                alt="Ubuntu"
              />
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"
                alt="Docker"
              />
              <img
                src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white"
                alt="OpenAI"
              />
            </div>
          </div>
        </div>

        {/* Slider de imágenes a la derecha */}
        <div className="gallery">
          <h3>Galería de interés</h3>
          <div className="gallery-slider">
            <img
              src={shuffledImages[currentImageIndex]}
              alt={`Ponencia ${currentImageIndex + 1}`}
              className="slider-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
