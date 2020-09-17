import React, { useState } from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import PlanCard from "./plan-card/PricingPlanCard";
import pricingData from "./pricingData";
import PlanAdditional from "./PlanAdditional";
import { gsap } from "gsap";
import Switch from "./Switch";
import { Waypoint } from "react-waypoint";

function PricingPlanHero() {
  const [showFeature, setShowFeature] = useState(false);
  const [isAnnually, setIsAnnually] = useState(false);
  const [isAdditionalCard, setIsAdditionalCard] = useState(false);

  const handleClick = () => {
    setShowFeature(!showFeature);
  };

  const handleToggle = () => {
    setIsAnnually(!isAnnually);
  };

  const animateCard = (one) => {
    const tl = gsap.timeline();
    tl.to(
      ".plan-card",
      {
        duration: 0.3,
        opacity: 1,
        ease: "circ.in",
        stagger: 0.15,
      },
      "-=0.1"
    );
  };
  const animateCardAdd = (one) => {
    const tl = gsap.timeline();
    tl.to(
      ".plan-card-additional",
      {
        duration: 0.3,
        opacity: 1,
        ease: "circ.in",
        stagger: 0.15,
      },
      "-=0.1"
    );
  };
  const featureLabel = showFeature ? "Hide all features" : "Show all features";

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

            <div className="switch-wrap ">
              <p>Billed Monthly</p>
              <Switch handleToggle={handleToggle} />
              <p>Billed Annually</p>
            </div>
          </div>
        </div>
        <Waypoint bottomOffset="55%" onEnter={animateCard}>
          <div className="row mb-5 d-flex">
            {pricingData.map((item, i) => (
              <PlanCard item={item} key={i} isAnnually={isAnnually} featureLabel={featureLabel} />
            ))}
          </div>
        </Waypoint>
        <Waypoint bottomOffset="40%" onEnter={animateCardAdd}>
          <div className="row additional-cards">
            {planFeatures.map((item, i) => (
              <PlanAdditional item={item} key={i} showFeature={showFeature} />
            ))}
            <div className="text-only show-additional" onClick={handleClick}>
              {featureLabel}
            </div>
          </div>
        </Waypoint>
      </div>
    </section>
  );
}

export default PricingPlanHero;
