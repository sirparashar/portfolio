import React from "react";
import "./About.css";
import mypic from "./images/mypic.jpeg";
import { FaDownload } from "react-icons/fa";
//import resumePdf from "./resume/Prashant_Parashar_resume.pdf";

function About() {
  return (
    <section id="About">
      <div className="about">
        <div className="about_container">
          <div className="about_img">
            <img
              className="profile-pic"
              src={mypic}
              alt="Prashant's Profile Pic"
            />
          </div>
          <div className="about_details">
            <h2>About Me</h2>

            <p>
              Hi there! I am Prashant. I have been coding for over 4 years now.
              I have great problem solving skills and love to solve and
              encounter difficult tasks. As a frontend developer I have made
              certain projects to solve day to problems. I have very good
              knowledge of competitive coding and proficiency in C and C++
              language, along with that I have intermediate skills for data
              structures and algorithm. I am bit slow in designing part but yeah
              I am progressing.
              <br />I have good data analysis skills. Reading about economy,
              whats changing the stock market, I love to explore investing
              opportunities. I am investing for over a year now and grown my
              investing portfolio to 50% ROI in a year and half by only
              investing in long term opportunities. I am photographer by hobby.
              I am always exited to click some amazing pictures.
            </p>
            <p>
              Prashant Parashar <br />
              pprashant311999@gmail.com
            </p>
            <div className="resume">
              <h3>
                <a
                  href="https://internshala.com/student/resume_download/465A09BB-917C-B3D6-51B0-496336242655/4875526"
                  download
                >
                  <FaDownload style={{ bottom: "0", width: "2em" }} />
                  <span className="resumeTitle"> Download Resume</span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
