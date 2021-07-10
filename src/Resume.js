import React from "react";
import "./Resume.css";
import ProgressBar from "./ProgressBar";

function Resume() {
  return (
    <section id="Resume">
      <div className="resume">
        <div className="education">
          <h2 className="titles">EDUCATION</h2>
          <div className="education_desc">
            <h2>BMS Institute of Technology</h2>
            <p>
              Bachelor's degree (B.E.) in Computer science (2018-2022)
              <br />
              current CGPA(8.5)
            </p>
            <p>
              XII - 87% with c++ as optional subject
              <br />X - 93%
            </p>
          </div>
        </div>
        <div className="resume_work">
          <h2 className="titles">WORK</h2>
          <div className="work_desc">
            <p>
              I have done Free lancing work for 6 months.
              <br /> I have made projects that will try to solve people's day to
              day problems. <br />
              Check out my work at secton below.
            </p>
          </div>
        </div>
        <div className="blog">
          <h2 className="titles">BLOG</h2>
          <div className="blog_desc">
            <h3>Check out my Writings </h3>
            <a href="https://medium.com/@sirparashar">Click me!</a>
          </div>
        </div>
        <div className="skill">
          <h2 className="titles">SKILLS</h2>
          <div className="Skill_desc">
            <h2>React</h2>
            <ProgressBar done={70} />
            <h2>Javascript</h2>
            <ProgressBar done={80} />
            <h2>Html & Css</h2>
            <ProgressBar done={95} />
            <h2>C++</h2>
            <ProgressBar done={80} />
            <h2>Data Structure and Algorithm</h2>
            <ProgressBar done={70} />
            <h2>Problem Solving</h2>
            <ProgressBar done={99} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
