import React from "react";
import SectionSlider from "../section-slider/SectionSlider";
import sliderWorkData from "../home/data/sliderWorkData";
import SectionQuote from "../section-quote/SectionQuote";
import ProjectIntro from "./section-project-intro/ProjectIntro";
import SectionProjectDesc from "./section-desc/SectionProjectDesc";
import ProjectResult from "./section-result/ProjectResult";

function ProjectPage() {
  return (
    <>
      <ProjectIntro />
      <SectionProjectDesc />
      <ProjectResult />
      <SectionSlider title="More Projects" data={sliderWorkData} />
      <SectionQuote />
    </>
  );
}

export default ProjectPage;
