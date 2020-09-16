import React, { useState } from "react";
import Button from "../../utils/button/Button";
import { featuresBasicData } from "./featuresData";
import Feature from "./Feature";
import "./plan-card.scss";

function PlanCard({ item, isLight }) {
  const { title, image, amount, popular } = item;
  const [showFeature, setShowFeature] = useState(false);

  const handleClick = (params) => {
    setShowFeature(!showFeature);
  };
  return (
    <div className="col-12 col-md-6 mb-5 col-lg-4">
      <div className=" plan-card text-center">
        <h3 className="plan-name">{title}</h3>
        <img src={image} alt="" />
        <h4 className="amount">
          {amount}
          <span>/ per month</span>
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

        <Button name="text-only" label="Show all features" handleClick={handleClick} />
        {showFeature ? featuresBasicData.map((item, i) => <Feature item={item} key={i} />) : null}

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
