import React from "react";
import ProjectTopicCard from "./ProjectTopicCard";
import "./project-topic.scss";
import projectTopicData from "./projectTopicData";

function ProjectTopic() {
  return (
    <div className="row align-items-center margin-b-100">
      <div className="col-12 col-md-4">
        <h2>How can we help?</h2>
      </div>
      <div className="col-12 col-md-8 project-cards-wrap">
        {projectTopicData.map((item, i) => (
          <ProjectTopicCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProjectTopic;
