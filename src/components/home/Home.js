import React, { useRef } from "react";
import SectionHero from "./section-hero/SectionHero";
import SectionOffer from "./section-offer/SectionOffer";
import SectionServices from "./section-services/SectionServices";
import SectionQuote from "../section-quote/SectionQuote";
import sliderBlogData from "./data/sliderBlogData";
import SectionSlider from "../section-slider/SectionSlider";
import sliderWorkData from "./data/sliderWorkData";
import SectionSecondOverlap from "../utils/section-second-overlap/SectionSecondOverlap";

import digitalHomeData from "./digitalHomeData";

function Home() {
  const childReference = useRef(null);

  const handleScroll = (params) => {
    childReference.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <div id="#main">
        <SectionHero handleScroll={handleScroll} />
        <SectionSecondOverlap data={digitalHomeData} ref={childReference} />
        <SectionOffer />
        <SectionSlider title="Our Works" data={sliderWorkData} path="work/retyre" />
        <SectionServices />
        <SectionSlider title="Our Blog" data={sliderBlogData} path="blog/single" />
        <SectionQuote />
      </div>
    </main>
  );
}

export default Home;
