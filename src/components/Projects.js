// src/components/Projects.js
import React from "react";
import cPlusPlusIcon from "../assets/c++.svg";
import djangoIcon from "../assets/django.svg";
import reactIcon from "../assets/react.svg";
import nestIcon from "../assets/nestjs.svg";
import tsIcon from "../assets/typescript.svg";
import dockerIcon from "../assets/docker.svg";
import pythonIcon from "../assets/python.svg";
import javaIcon from "../assets/java.svg";
import jsIcon from "../assets/js.svg";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import chainIcon from "../assets/chain.svg";

const projects = [
  {
    title: "Mailman Actividades Extracurriculares",
    description:
      "Management of a mailing system between universities for extracurricular activities. Displays the result through a terminal menu.",
    icons: [cPlusPlusIcon],
    repoLink:
      "https://github.com/juannhm02/MailingActividadesExtracurriculares",
    structure: [
      "📁 .vscode",
      "📁 Entities",
      "📁 Views",
      "📁 obj",
      "📄 Makefile",
      "📄 README.md",
      "📄 Tests.cpp",
      "📄 usuarios_test.txt",
    ],
  },
  {
    title: "Gestor de máquinas",
    description: "App created for cluster reservation in C++.",
    icons: [cPlusPlusIcon],
    repoLink: "https://github.com/juannhm02/Gestor-de-maquinas",
    structure: [
      "📁 .settings",
      "📁 Entities",
      "📁 cute",
      "📁 test",
      "📁 views",
      "📄 .cproject",
      "📄 .project",
      "📄 README.md",
    ],
  },
  {
    title: "Countrle",
    description:
      "Countrle is a web application based on Wordle. Players challenge themselves to guess concepts related to countries.",
    icons: [djangoIcon, reactIcon],
    repoLink: "https://github.com/juannhm02/Countrle",
    webLink: "https://countrle.netlify.app/",
    structure: [
      "📁 countrle",
      "📁 frontend",
      "📁 node_modules",
      "📁 uploads/Y/m/d",
      "📁 usermanager",
      "📁 venv",
      "📁 words",
      "📄 README.md",
      "📄 db.sqlite3",
      "📄 manage.py",
    ],
  },
  {
    title: "UCOLib",
    description:
      "Mobile application for creating and managing server-side services. Ideal for enterprise applications and web services.",
    icons: [nestIcon, tsIcon, dockerIcon],
    repoLinkBack: "https://github.com/juannhm02/UcoLib.git",
    repoLinkFront: "https://github.com/juannhm02/APP-ISMFront.git",
    structure: [
      "📁 apps",
      "📁 uploads",
      "📄 Dockerfile",
      "📄 README.md",
      "📄 docker-compose.yml",
      "📄 nest-cli.json",
      "📄 package-lock.json",
      "📄 package.json",
      "📄 tsconfig.base.json",
      "📄 tsconfig.build.json",
      "📄 tsconfig.json",
    ],
  },
  {
    title: "Clasificación de Inmuebles y Evaluación de Inmigración",
    description: "CommonKADS methodology, construction of knowledge systems.",
    icons: [pythonIcon],
    repoLink: "https://github.com/juannhm02/trabajoClasificacion",
    structure: [
      "📄 README.md",
      "📄 VistaClasificacion.py",
      "📄 appClasificacion.py",
      "📄 bcC.py",
      "📄 bcC_inmigracion.py",
      "📄 bcC_inmuebles.py",
      "📄 ckCtrlClasificacion.py",
      "📄 mC.py",
    ],
  },
  {
    title: "Reserva de Pistas",
    description: "Basketball court reservation manager.",
    icons: [javaIcon, jsIcon, htmlIcon, cssIcon],
    repoLink: "https://github.com/juannhm02/ReservaPistas",
    structure: [
      "📁 .vscode",
      "📁 p1",
      "📁 p3",
      "📄 .gitignore",
      "📄 .project",
      "📄 README.md",
      "📄 ej2.jar",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Projects</h2>
      <div className="cardContainer">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="top-section">
              <div className="icons">
                {project.icons.map((icon, i) => (
                  <img
                    src={icon}
                    alt="tech icon"
                    width="25"
                    height="25"
                    key={i}
                  />
                ))}
              </div>
              <div className="contentProject">
                <span className="title">{project.title}</span>
              </div>
            </div>

            <div className="bottom-section">
              <span className="description">{project.description}</span>
              <div className="row row1">
                {project.repoLinkBack && (
                  <div className="item">
                    <span className="big-text">Backend Repo</span>
                    <span className="regular-text">
                      <a
                        href={project.repoLinkBack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectURL"
                      >
                        <img
                          src={chainIcon}
                          width="15"
                          height="15"
                          alt="link icon"
                        />{" "}
                        Access here
                      </a>
                    </span>
                  </div>
                )}
                {project.repoLinkFront && (
                  <div className="item">
                    <span className="big-text">Frontend Repo</span>
                    <span className="regular-text">
                      <a
                        href={project.repoLinkFront}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectURL"
                      >
                        <img
                          src={chainIcon}
                          width="15"
                          height="15"
                          alt="link icon"
                        />{" "}
                        Access here
                      </a>
                    </span>
                  </div>
                )}
                {project.repoLink &&
                  !project.repoLinkBack &&
                  !project.repoLinkFront && (
                    <div className="item">
                      <span className="big-text">Repository</span>
                      <span className="regular-text">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projectURL"
                        >
                          <img
                            src={chainIcon}
                            width="15"
                            height="15"
                            alt="link icon"
                          />{" "}
                          Access here
                        </a>
                      </span>
                    </div>
                  )}
                {project.webLink && (
                  <div className="item">
                    <span className="big-text">Web</span>
                    <span className="regular-text">
                      <a
                        href={project.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectURL"
                      >
                        <img
                          src={chainIcon}
                          width="15"
                          height="15"
                          alt="link icon"
                        />{" "}
                        Access here
                      </a>
                    </span>
                  </div>
                )}
              </div>

              {/* Project structure button */}
              <div className="relative group inline-block">
                <div className="project-structure-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 14"
                    height="20"
                    width="20"
                  >
                    <path
                      fill="#00f0ff"
                      d="M16.2 1.75H8.1L6.3 0H1.8C0.81 0 0 0.7875 0 1.75V12.25C0 13.2125 0.81 14 1.8 14H15.165L18 9.1875V3.5C18 2.5375 17.19 1.75 16.2 1.75Z"
                    ></path>
                    <path
                      fill="#00f0ff"
                      d="M16.2 2H1.8C0.81 2 0 2.77143 0 3.71429V12.2857C0 13.2286 0.81 14 1.8 14H16.2C17.19 14 18 13.2286 18 12.2857V3.71429C18 2.77143 17.19 2 16.2 2Z"
                    ></path>
                  </svg>
                  <p>Folder Structure</p>
                </div>

                {/* Dropdown list of the structure */}
                <div className="project-structure-dropdown">
                  <ul className="p-4 space-y-1">
                    {project.structure.map((item, idx) => (
                      <li key={idx} className="project-structure-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
