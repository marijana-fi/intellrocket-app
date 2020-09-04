import React, { useState } from "react";

function ProjectTopicCard({ item }) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className={checked ? "project-card checked" : "project-card"}>
      <img src={checked ? item.checked : item.img} alt="" />
      <h3 className="card-title">{item.title}</h3>
      <input type="checkbox" name="topic" value="website" onChange={() => setChecked(!checked)} />
      <span className="checkbox"></span>
    </div>
  );
}

export default ProjectTopicCard;
