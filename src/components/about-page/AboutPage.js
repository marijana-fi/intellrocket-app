import React from "react";
import SectionQuote from "../section-quote/SectionQuote";
import SharedSectionHero from "../utils/shared-section-hero/SharedSectionHero";
import aboutHeroData from "./aboutHeroData";
import SectionSecondOverlap from "../utils/section-second-overlap/SectionSecondOverlap";
import aboutVisionData from "./aboutVisionData";
import AboutClients from "./about-clients/AboutClients";
function AboutPage() {
  return (
    <>
      <SharedSectionHero data={aboutHeroData} />
      <SectionSecondOverlap data={aboutVisionData} />
      <AboutClients />
      <SectionQuote />
    </>
  );
}

export default AboutPage;
