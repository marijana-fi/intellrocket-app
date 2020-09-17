import React, { useRef } from "react";
import BicycleHero from "./bicycle-hero/BicycleHero";
import BicycleStore from "./bicycle-store/BicycleStore";
import SectionQuote from "../section-quote/SectionQuote";
import SectionSlider from "../section-slider/SectionSlider";
import sliderBlogData from "../blogs-page/postsData";
import BicycleServices from "./bicycle-services/BicycleServices";
import BicycleBenefits from "./BicycleBenefits";
import BicycleStack from "./BicycleStack";
import "./bicycle-page.scss";
import Faq from "./Faq";

function BicyclePage({ isLight }) {
  const childReference = useRef(null);
  const handleScroll = (params) => {
    childReference.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <BicycleHero handleScroll={handleScroll} />
      <BicycleStore ref={childReference} />
      <BicycleServices isLight={isLight} />
      <BicycleBenefits isLight={isLight} />
      <SectionQuote />
      <SectionSlider title="Our Blog" data={sliderBlogData} path="blog/single" />
      <BicycleStack isLight={isLight} />
      <Faq isLight={isLight} />
    </div>
  );
}

export default BicyclePage;
