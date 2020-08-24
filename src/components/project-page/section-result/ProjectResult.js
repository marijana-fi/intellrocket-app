import React from "react";
import RevealTitle from "../../reveal-title/RevealTitle";
import RevealText from "../../reveal-text/RevealText";
import projectsData from "../projectsData";
import "./project-result.scss";
import Button from "../../button/Button";

function ProjectResult() {
  return (
    <section id="project-result" className="margin-b">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-12 col-lg-9 mb-5 result-desc">
            <RevealTitle tag="h2" title="Results" />
            <RevealText tag="p" text={projectsData[0].result} />
          </div>

          {projectsData[0].resultData.map((data, i) => {
            return (
              <div className="col-12 col-sm-4 col-md-2  info-wrap" key={i}>
                <RevealText tag="h4" text={data.label} classname="result-label" />
                <RevealText tag="p" text={data.info} classname="result-info" />
              </div>
            );
          })}
          <div className="col-md-8 align-self-start mr-auto">
            <Button name="btn" label="Visit Website" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectResult;
