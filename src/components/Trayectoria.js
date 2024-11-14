// src/components/Trayectoria.js
import React from "react";
import geniallyLogo from "../assets/Genially.png";
import diocesanoLogo from "../assets/diocesano.png";
import ceepsLogo from "../assets/ceeps.png";
import aicoLogo from "../assets/aico.png";
import ceucoLogo from "../assets/ceuco.png";
import ritsiLogo from "../assets/ritsi.png";
import "../styles/App.css";

function Trayectoria() {
  const experiences = [
    {
      title: "Desarrollador de front-end",
      company: "Genially",
      type: "Contrato de prácticas",
      duration: "oct. 2023 - Actualidad · 2 meses",
      location: "Córdoba, Andalucía, España · En remoto",
      description:
        "He comenzado a trabajar en este gran proyecto, con muchas ganas y con actitud, ya que siempre ha sido mi empresa soñada.",
      logo: geniallyLogo,
      skills: "Infraestructura de software, React.js y 9 aptitudes más",
      extra: "Carta de presentación formal a Genially",
    },
    {
      title: "Vicepresidente",
      company: "Asociación AICO",
      type: "Jornada completa",
      duration: "jun. 2023 - Actualidad · 5 meses",
      location: "Córdoba, Andalucía, España · Presencial",
      description:
        "A través de este rol en la asociación, he decidido adquirir aún más experiencia en representación, en este caso, dentro de la rama de relaciones estudiantiles dentro de la Escuela Politécnica Superior de la Universidad de Córdoba.",
      logo: aicoLogo,
      skills:
        "Relaciones con alumnos, Instituciones educativas y 2 aptitudes más",
    },

    {
      title: "Consejo de Estudiantes de la EPSC, CEEPS",
      company: "Universidad de Córdoba",
      location: "Córdoba, Andalucía, España · Presencial",
      roles: [
        {
          position: "Presidente",
          duration: "ago. 2021 - Actualidad · 1 año 11 meses",
          description:
            "He dirigido un consejo de estudiantes para poder abordar todos los problemas que ellos conllevan. Principalmente adquirí grandes habilidades de comunicación y expresión.",
          skills: "Trabajo en equipo, Hablar en público y 4 aptitudes más",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "Consejo de Estudiantes de la EPSC, CEEPS",
      company: "Universidad de Córdoba",
      location: "Córdoba, Andalucía, España · Presencial",
      roles: [
        {
          position: "Vicepresidente",
          duration: "oct. 2022 - Actualidad · 1 año",
          description:
            "A través de este he adquirido todas las capacidades necesarias para poder afrontar una presidencia y poder desarrollar aptitudes que hasta el momento no me ofrecían.",
          skills: "Trabajo en equipo, Dirección de equipos y 3 aptitudes más",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "Plenario de CEUCO",
      company: "Universidad de Córdoba",
      type: "",
      duration: "sept. 2022 - Actualidad · 1 año 2 meses",
      location: "Universidad de Córdoba",
      description: "",
      logo: ceucoLogo,
    },
    {
      title: "Consejo de Estudiantes de la EPSC, CEEPS",
      company: "Universidad de Córdoba",
      location: "Córdoba, Andalucía, España · Presencial",
      roles: [
        {
          position: "Representante de grupo",
          duration: "ene. 2021 - Actualidad · 1 año 11 meses",
          description:
            "He podido aprender la capacidad de representar a los estudiantes de grado, adaptándome a la solución de problemáticas y desarrollando habilidades de afrontar la problemática y coordinar a cargo de la Escuela.",
          skills: "Liderazgo estudiantil, Liderazgo escolar y 3 aptitudes más",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "Plenario",
      company:
        "Reunión de Estudiantes de Ingenierías Técnicas y Superiores en Informática - RITSI",
      type: "",
      duration: "sept. 2021 - sept. 2023 · 2 años 1 mes",
      location: "",
      description:
        "He adquirido aptitudes como plenario en dicha asociación, pudiendo compartir mis conocimientos en el ámbito de la Ingeniería Informática, sumados a la experiencia como representante y miembro de mesa del Consejo de Estudiantes para llevarlo a nivel nacional.",
      logo: ritsiLogo,
      skills: "Aptitudes: Comunicación - Habilidades sociales",
    },

    {
      title: "Miembro del Consejo Diocesano de Laicos",
      company: "Diócesis de Córdoba",
      type: "Contrato por obra o servicio",
      duration: "sept. 2023 - Actualidad · 1 mes",
      location: "Córdoba, Andalucía, España · Presencial",
      description: "",
      logo: diocesanoLogo,
    },
  ];

  return (
    <section id="trayectoria" className="trayectoria-section fade-in">
      <h2 className="trayectoria-title">Career</h2>
      <div className="experiencia-grid">
        {experiences.map((experience, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* Tarjeta Frontal */}
              <div className="flip-card-front">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo"
                />
                <h3 className="title">{experience.title}</h3>
                <p className="company">{experience.company}</p>
                <p className="type">{experience.type}</p>
                <p className="duration">{experience.duration}</p>
                <p className="location">{experience.location}</p>
              </div>
              {/* Tarjeta Trasera */}
              <div className="flip-card-back">
                <p className="description">{experience.description}</p>
                {experience.skills && (
                  <p className="skills">{experience.skills}</p>
                )}
                {experience.extra && (
                  <p className="extra">{experience.extra}</p>
                )}
                {experience.roles &&
                  experience.roles.map((role, roleIndex) => (
                    <div key={roleIndex}>
                      <h4 className="title">{role.position}</h4>
                      <p className="duration">{role.duration}</p>
                      <p className="description">{role.description}</p>
                      <p className="skills">{role.skills}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trayectoria;
