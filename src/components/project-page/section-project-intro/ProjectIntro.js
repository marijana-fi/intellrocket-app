import React from "react";
import projectsData from "../projectsData";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import Button from "../../utils/button/Button";

import "./project-intro.scss";
import RevealImage from "../../utils/reveal-image/RevealImage";

function ProjectIntro() {
  return (
    <section id="project-intro" className="mb-5">
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className="col-12 col-md-8 d-flex flex-column align-items-center intro-text-wrap margin-b-100">
            <div className="d-flex flex-column align-items-center mb-3">
              <RevealTitle tag="h2" title={projectsData[0].title} />
              <RevealText tag="p" text={projectsData[0].desc} />
            </div>
            <div className="explore d-flex align-items-center btn-slide-in">
              <Button name="round" label="" />
              <span>Explore</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RevealImage src={projectsData[0].mockup} alt="home page design" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectIntro;
