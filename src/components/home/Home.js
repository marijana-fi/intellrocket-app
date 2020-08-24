import React from "react";
import SectionHero from "./section-hero/SectionHero";
import SectionDigital from "./section-digital/SectionDigital";
import SectionOffer from "./section-offer/SectionOffer";
import SectionServices from "./section-services/SectionServices";
import SectionQuote from "../section-quote/SectionQuote";
import sliderBlogData from "./data/sliderBlogData";
import SectionSlider from "../section-slider/SectionSlider";
import sliderWorkData from "./data/sliderWorkData";

function Home() {
  return (
    <>
      <SectionHero />
      <SectionDigital />
      <SectionOffer />
      <SectionSlider title="Our Works" data={sliderWorkData} />
      <SectionServices />
      <SectionSlider title="Our Blog" data={sliderBlogData} />
      <SectionQuote />
    </>
  );
}

export default Home;
