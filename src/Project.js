import React from "react";
import "./Project.css";

function Project(props) {
  const { img, title, link } = props;
  return (
    <div className="project_items">
      <img src={img} alt="" />

      <h2 className="desc">
        <a href={link}> {title}</a>
      </h2>
    </div>
  );
}

export default Project;
