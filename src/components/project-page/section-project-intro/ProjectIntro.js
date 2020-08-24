import React from "react";
import projectsData from "../projectsData";
import RevealTitle from "../../reveal-title/RevealTitle";
import RevealText from "../../reveal-text/RevealText";
import Button from "../../button/Button";
import "./project-intro.scss";

function ProjectIntro() {
  return (
    <section id="project-intro" className="margin-b mt-5">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center mb-5">
              <RevealTitle tag="h2" title={projectsData[0].title} />
              <RevealText tag="p" text={projectsData[0].desc} />
            </div>
            <div className="explore d-flex align-items-center btn-slide-in">
              <Button name="round" label="" />
              <span>Explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectIntro;
