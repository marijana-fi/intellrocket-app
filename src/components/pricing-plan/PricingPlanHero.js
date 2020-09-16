import React, { useState } from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import PlanCard from "./plan-card/PlanCard";
import pricingData from "./pricingData";
import PlanAdditional from "./PlanAdditional";
import Button from "../utils/button/Button";

function PricingPlanHero() {
  const [showFeature, setShowFeature] = useState(false);

  const handleClick = (params) => {
    setShowFeature(!showFeature);
  };

  const planFeatures = [
    { title: "Basic", img: "/intellrocket-app/img/pricing/basic-icon.png" },
    { title: "Standard", img: "/intellrocket-app/img/pricing/standard-icon.png" },
    { title: "Premium", img: "/intellrocket-app/img/pricing/premium-icon.png" },
  ];
  return (
    <section id="pricing-plan-hero" className="margin-b">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <RevealTitle tag="h4" title="price list for everyone" customClass="colorize-text" />
            <RevealTitle tag="h1" title="Try it, 50% Off First Month" />
            <RevealText
              tag="p"
              text="By paying annually, you get 2 months of"
              img="pricing"
              customClass="arrow-img-wrap"
            />
            <RevealText tag="div" text="Billed Monthly" />
          </div>
        </div>
        <div className="row mb-5">
          {pricingData.map((item, i) => (
            <PlanCard item={item} key={i} />
          ))}
        </div>
        <div className="row additional-cards">
          {planFeatures.map((item, i) => (
            <PlanAdditional item={item} key={i} showFeature={showFeature} />
          ))}
        </div>
        <Button
          name="text-only show-additional"
          label="Show all features"
          handleClick={handleClick}
        />
      </div>
    </section>
  );
}

export default PricingPlanHero;
