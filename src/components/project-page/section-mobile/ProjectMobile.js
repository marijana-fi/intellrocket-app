import React from "react";
import RevealTitle from "../../reveal-title/RevealTitle";
import projectsData from "../projectsData";
import RevealText from "../../reveal-text/RevealText";

function ProjectMobile() {
  return (
    <section id="section-project-mobile">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="text-wrap">
              <RevealTitle tag="h2" title="Mobile Design" />
              <RevealText tag="p" text={projectsData[0].mobile} />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="img/projects/retyre-home.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectMobile;
