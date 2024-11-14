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
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffYears = end.getFullYear() - start.getFullYear();
    const diffMonths = end.getMonth() - start.getMonth();
    const totalMonths = diffYears * 12 + diffMonths;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years > 0 ? `${years} año${years > 1 ? "s" : ""} ` : ""}${
      months > 0 ? `${months} mes${months > 1 ? "es" : ""}` : ""
    }`;
  };

  const experiences = [
    {
      title: "Front-end Developer",
      company: "Genially",
      type: "Internship",
      duration: `Oct. 2023 - Present · ${calculateDuration("2023-10-01")}`,
      location: "Córdoba, Andalusia, Spain · Remote",
      description:
        "I have started working on this great project with a lot of enthusiasm and attitude, as it has always been my dream company.",
      logo: geniallyLogo,
      skills:
        "Software Infrastructure · React.js · TypeScript · Front-end Development · Slack · Software Project Management · Sentry",
    },
    {
      title: "Vice President",
      company: "AICO Association",
      type: "Full-time",
      duration: `Jun. 2023 - Present · ${calculateDuration("2023-06-01")}`,
      location: "Córdoba, Andalusia, Spain · On-site",
      description:
        "Through this role in the association, I have decided to gain even more experience in representation, in this case, within the branch of student relations within the Polytechnic School of the University of Córdoba.",
      logo: aicoLogo,
      skills:
        "Alumni Relations · Educational Institutions · Public Speaking · Organizational Development",
    },
    {
      title: "EPSC Student Council (CEEPS)",
      company: "University of Córdoba",
      type: "Academic Training",
      location: "Córdoba, Andalusia, Spain · On-site",
      roles: [
        {
          position: "President",
          duration: `Oct. 2023 - Present · ${calculateDuration("2023-10-01")}`,
          description:
            "I have led a student council to address all the problems they entail. Mainly, I acquired great communication and expression skills.",
          skills:
            "Teamwork · Leadership · Public Speaking · Communication · Operational Management · Social Skills",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "EPSC Student Council (CEEPS)",
      company: "University of Córdoba",
      type: "Academic Training",
      location: "Córdoba, Andalusia, Spain · On-site",
      roles: [
        {
          position: "Vice President",
          duration: `Oct. 2022 - Oct. 2023 · ${calculateDuration(
            "2022-10-01",
            "2023-10-01"
          )}`,
          description:
            "Through this role, I acquired all the necessary skills to face a presidency and develop aptitudes that were not offered to me until then.",
          skills:
            "Teamwork · Team Management · Soft Skills · Patience · Team Leadership",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "CEUCO Plenary",
      company: "University of Córdoba",
      type: "",
      duration: `Sept. 2022 - Sept. 2024 · ${calculateDuration(
        "2022-09-01",
        "2024-09-01"
      )}`,
      location: "University of Córdoba",
      description: "",
      roles: [
        {
          description:
            "I have acquired skills as a plenary member in this association, being able to share my knowledge in the field of Computer Engineering, along with the experience as a representative and board member of the Student Council to take it to a national level.",
          skills:
            "Communication · Social Skills · Teamwork · Team Management · Soft Skills · Patience · Team Leadership",
        },
      ],
      logo: ceucoLogo,
    },
    {
      title: "EPSC Student Council (CEEPS)",
      company: "University of Córdoba",
      type: "Academic Training",
      location: "Córdoba, Andalusia, Spain · On-site",
      roles: [
        {
          position: "Group Representative",
          duration: `Jan. 2021 - Oct. 2024 · ${calculateDuration(
            "2021-01-01",
            "2024-10-01"
          )}`,
          description:
            "I have learned the ability to represent undergraduate students, adapting to problem-solving and developing skills to address issues and coordinate on behalf of the School.",
          skills:
            "Student Leadership · School Leadership · Communication · Social Skills",
        },
      ],
      logo: ceepsLogo,
    },
    {
      title: "RITSI Plenary",
      company:
        "Reunión de Estudiantes de Ingenierías Técnicas y Superiores en Informática - RITSI",
      type: "",
      duration: `Sept. 2021 - Sept. 2023 · ${calculateDuration(
        "2021-09-01",
        "2023-09-01"
      )}`,
      location: "",
      description:
        "I have acquired skills as a plenary member in this association, being able to share my knowledge in the field of Computer Engineering, along with the experience as a representative and board member of the Student Council to take it to a national level.",
      logo: ritsiLogo,
      skills: "Communication · Social Skills",
    },
    {
      title: "Member Diocesan Council Laity",
      company: "Diocese of Córdoba",
      type: "Work or Service Contract",
      duration: `Sept. 2023 - Present · ${calculateDuration("2023-09-01")}`,
      location: "Córdoba, Andalusia, Spain · On-site",
      description:
        "I have had the opportunity to be part of this project, to address the problems of the young and diocesan church of Córdoba, thus acquiring more knowledge and providing a service to the Diocese of Córdoba.",
      skills:
        "Community Outreach · Pastoral Care · Religious Education · Volunteer Management · Event Planning · Public Speaking · Team Leadership",
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
