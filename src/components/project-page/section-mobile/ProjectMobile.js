import React from "react";
import RevealTitle from "../../reveal-title/RevealTitle";
import projectsData from "../projectsData";
import RevealText from "../../reveal-text/RevealText";
import RevealImage from "../reveal-image/RevealImage";
import "./section-mobile.scss";

function ProjectMobile() {
  return (
    <section id="section-project-mobile">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-12 col-md-6">
            <div className="text-wrap">
              <RevealTitle tag="h2" title="Mobile Design" />
              <RevealText tag="p" text={projectsData[0].mobile} />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5">
            <RevealImage src={projectsData[0].mobileImg} alt="mobile design" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectMobile;
