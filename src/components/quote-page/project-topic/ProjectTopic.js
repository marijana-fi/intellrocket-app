import React, { useState, useEffect } from "react";
import ProjectTopicCard from "./ProjectTopicCard";
import "./project-topic.scss";
import projectTopicData from "./projectTopicData";
import additionalProjectData from "./additionalProjectData";

function ProjectTopic() {
  const [selected, setSelected] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);

  const handleCardClick = (value) => {
    const index = selected.indexOf(value);
    if (index !== -1) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  useEffect(() => {
    const additional = additionalProjectData.filter((item) => selected.indexOf(item.name) > -1);
    setAdditionalData(additional);
  }, [selected]);

  return (
    <>
      <div className="row align-items-center margin-b-100">
        <div className="col-12 col-md-4">
          <h2>How can we help?</h2>
        </div>
        <div className="col-12 col-md-8 project-cards-wrap">
          {projectTopicData.map((item, i) => (
            <ProjectTopicCard item={item} key={i} handleCardClick={handleCardClick} />
          ))}
        </div>
      </div>
      {additionalData.map((item) => (
        <div className="row align-items-center margin-b-100">
          <div className="col-12 col-md-4">
            <h2>{item.name}</h2>
          </div>
          <div className="col-12 col-md-8 project-cards-wrap">
            {item.info.map((el, i) => (
              <ProjectTopicCard item={el} key={i} handleCardClick={handleCardClick} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectTopic;
