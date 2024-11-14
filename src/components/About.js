// src/components/About.js
import React from "react";
import profileImage from "../assets/YO.png";
import cvFile from "../assets/CV_Juan_Higuera.pdf";

function About() {
  return (
    <section id="about" className="about-section fade-in">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <p>
            I am a young student who is passionate about the world of computing
            and at 22 years old, I have spent the last four years training in
            the field of Software.
          </p>
          <p>
            I would like to find a Frontend job to gain a broader knowledge
            about it and apply everything I know.
          </p>
          <p>
            Besides having a lot of passion for what I have studied, it is also
            my desire to conquer the world that drives me to personal and
            professional success.
          </p>
          <div className="cv-button-container">
            <a
              href={cvFile}
              download="CV_JuanHiguera.pdf"
              className="button-icon"
            >
              <div className="icon">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 14V11.7979C22 11.4227 21.9978 10.75 21.9978 10.75L22 10H2V10.75V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z"
                    fill="#1C274C"
                  />
                  <path
                    opacity="0.5"
                    d="M11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V9.25V10H22L21.9531 9.25C21.8809 8.20117 21.6973 7.51276 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4Z"
                    fill="#1C274C"
                  />
                </svg>
              </div>
              <div className="cube">
                <span className="side front">Download CV</span>
                <span className="side top">click here to download</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
