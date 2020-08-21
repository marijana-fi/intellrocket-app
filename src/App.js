import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionDigital from "./components/section-digital/SectionDigital";
import SectionOffer from "./components/section-offer/SectionOffer";
import SectionServices from "./components/section-services/SectionServices";
import SectionSlider from "./components/section-slider/SectionSlider";
import sliderBlogData from "./data/sliderBlogData";
import sliderWorkData from "./data/sliderWorkData";
import SectionQuote from "./components/section-quote/SectionQuote";
import Footer from "./components/footer/Footer";
import ToggleTheme from "./components/toggle-theme/ToggleTheme";

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={isLight ? "App" : "App dark"}>
      <Header isLight={isLight} toggleTheme={toggleTheme} />
      <SectionHero />
      <SectionDigital />
      <SectionOffer />
      <SectionSlider title="Our Works" data={sliderWorkData} />
      <SectionServices />
      <SectionSlider title="Our Blog" data={sliderBlogData} />
      <SectionQuote />
      <Footer isLight={isLight} />
    </div>
  );
}

export default App;
