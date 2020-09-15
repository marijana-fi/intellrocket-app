import React from "react";
import RevealImage from "../utils/reveal-image/RevealImage";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import Button from "../utils/button/Button";

function HeroSection() {
  return (
    <section id="maintenance-hero" className="margin-b">
      <div className="container">
        <div className="row flex-row-reverse align-items-center">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <RevealImage src="/intellrocket-app/img/maintenance/maintenance-hero.png" />
          </div>
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h1" title="WordPress Support and Maintenance Services" />
            <RevealText tag="p" text="Save time managing your Website" />
            <Button name="btn" label="Choose your plan" animate="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
