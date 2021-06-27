import React from "react";
import "./Works.css";
import { projects } from "./projects";
import Project from "./Project";

function Works() {
  return (
    <section id="Works">
      <div className="work">
        <h2>CHECK OUT SOME OF MY WORKS</h2>
        <div className="work_container">
          <div className="work_container_flex">
            {projects.map((project) => {
              return <Project key={project.id} {...project} />;
            })}

            <div className="work_fadebutton" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
