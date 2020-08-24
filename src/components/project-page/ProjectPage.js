import React from "react";
import SectionSlider from "../section-slider/SectionSlider";
import sliderWorkData from "../home/data/sliderWorkData";
import SectionQuote from "../section-quote/SectionQuote";
import ProjectIntro from "./section-project-intro/ProjectIntro";
import SectionProjectDesc from "./section-desc/SectionProjectDesc";
import ProjectResult from "./section-result/ProjectResult";
import ProjectMobile from "./section-mobile/ProjectMobile";
import ProjectProduct from "./section-product/ProjectProduct";

function ProjectPage() {
  return (
    <>
      <ProjectIntro />
      <SectionProjectDesc />
      <ProjectMobile />
      <ProjectProduct />
      <ProjectResult />
      <SectionSlider title="More Projects" data={sliderWorkData} toFilter="reTyre" />
      <SectionQuote />
    </>
  );
}

export default ProjectPage;
