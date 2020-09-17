import React, { useState } from "react";
import Button from "../../utils/button/Button";
import { featuresBasicData } from "./featuresData";
import Feature from "./Feature";
import "./plan-card.scss";

function PlanCard({ item, isLight, isAnnually }) {
  const { title, image, amount, popular, annually, save } = item;
  const [showFeature, setShowFeature] = useState(false);

  const handleClick = (params) => {
    setShowFeature(!showFeature);
  };
  const featureLabel = showFeature ? "Hide all features" : "Show all features";
  const openCard = showFeature ? "open" : "";
  return (
    <div className="col-12 col-md-6 mb-5 col-lg-4">
      <div className={`${openCard} plan-card text-center`}>
        <h3 className="plan-name">{title}</h3>
        <img src={image} alt="" />
        <h4 className="amount">
          {isAnnually ? annually : amount}
          <span>/ per month</span>
        </h4>
        {isAnnually ? <p className="save-amount">save {save}</p> : null}

        <p className="plan-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>

        <Button name="text-only" label={featureLabel} handleClick={handleClick} />
        {featuresBasicData.map((item, i) => (
          <Feature item={item} key={i} showFeature={showFeature} />
        ))}

        <Button name="btn btn-secondary" label="Subscribe now" />
        {popular ? (
          <div className="popular">
            <img
              className="popular-icon"
              src="/intellrocket-app/img/pricing/Most-Popular.png"
              alt=""
            />
            <h5 className="popular">The Most Popular</h5>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PlanCard;
