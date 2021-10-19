import React from "react";


function ProjectCard({img, name}) {
  return (
    <div className="project_card">
      <img src={img} className="project_img" alt="project_img" />
      <p>{name}</p>
    </div>
  );
}

export default ProjectCard;
