import React from "react";
import projectsData from "../projectsData";
import RevealTitle from "../../utils/reveal-title/RevealTitle";

import "./section-project-desc.scss";

import RevealImage from "../../utils/reveal-image/RevealImage";
import RevealText from "../../utils/reveal-text/RevealText";

const SectionProjectDesc = () => {
  return (
    <section id="section-project-desc" className="margin-b">
      <div className="container">
        <div className="row text-desc">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-3 mb-lg-0">
            <RevealTitle tag="h3" title="The Challenge" />
            <RevealText tag="p" text={projectsData[0].challenge} />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <RevealTitle tag="h3" title="The Approach" />
            <RevealText tag="p" text={projectsData[0].approach} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <RevealImage src={projectsData[0].home} alt="home page design" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProjectDesc;
