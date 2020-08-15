import React, { useState } from "react";
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

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <div className={isLight ? "App" : "App dark"}>
      <button className="theme-toggle-wrapper">
        <input type="checkbox" id="checkbox" onChange={() => toggleTheme()} />
        <label className="theme-toggle" htmlFor="checkbox">
          <div className="toggle"></div>
          <span>Dark</span>
          <span>Light</span>
        </label>
      </button>
      <Header isLight={isLight} />
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
