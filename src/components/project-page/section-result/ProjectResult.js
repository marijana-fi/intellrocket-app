import React, { useState } from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import projectsData from "../projectsData";
import "./project-result.scss";
import { Waypoint } from "react-waypoint";

function ProjectResult() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section id="project-result">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-lg-9 result-desc">
            <RevealTitle tag="h2" title="Results" />
            <RevealText tag="p" text={projectsData[0].result} />
          </div>

          {projectsData[0].resultData.map((data, i) => {
            return (
              <div className="col-12 col-sm-4 col-md-2 margin-b-100 info-wrap" key={i}>
                <RevealText tag="h4" text={data.label} classname="result-label" />
                <RevealText tag="p" text={data.info} classname="result-info" />
              </div>
            );
          })}
          <div className="col-md-8 d-flex pt-3 mr-auto btn-wrap">
            <Waypoint onEnter={() => setIsVisible(true)}>
              <button className={isVisible ? "btn btn-slide-in" : "btn"}>
                <a href={projectsData[0].url}>Visit Website</a>
              </button>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectResult;
