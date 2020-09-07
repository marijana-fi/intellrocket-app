import React from "react";
import SharedSectionHero from "../utils/shared-section-hero/SharedSectionHero";
import careerHeroData from "./careerHeroData";
import SectionQuote from "../section-quote/SectionQuote";
import Positions from "./Positions";
import CareerCulture from "./CareerCulture";
import "./career-page.scss";

function CareerPage() {
  return (
    <div>
      <SharedSectionHero data={careerHeroData} customClass="rotate-title rotate-career" />
      <CareerCulture />
      <Positions />
      <SectionQuote />
    </div>
  );
}

export default CareerPage;
