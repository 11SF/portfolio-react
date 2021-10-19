import React from "react";

import "./SkillCard.css";

function SkillCard({icon, name}) {
  return (
    <div className="body">
        <div className="icon" style={{backgroundImage: `url('${icon}')`}} />
        <p>{name}</p>
    </div>
  );
}

export default SkillCard;