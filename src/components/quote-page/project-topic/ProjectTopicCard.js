import React, { useState } from "react";

function ProjectTopicCard({ item, handleCardClick }) {
  const [checked, setChecked] = useState(false);

  return (
    <div
      className={checked ? "project-card checked" : "project-card"}
      onClick={(e) => handleCardClick(e.target.value)}
    >
      <img src={checked ? item.checked : item.img} alt="" />
      <h3 className="card-title">{item.title}</h3>
      <input
        type="checkbox"
        name="topic"
        value={item.title}
        onChange={() => setChecked(!checked)}
      />
      <span className="checkbox"></span>
    </div>
  );
}

export default ProjectTopicCard;
