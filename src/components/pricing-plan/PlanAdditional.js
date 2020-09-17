import React from "react";
import { featuresBasicData } from "./plan-card/featuresData";
import Feature from "./plan-card/Feature";

function PlanAdditional({ item, showFeature }) {
  return (
    <div className="col-12 col-md-6 mb-5 col-lg-4">
      <div className="plan-card-additional">
        <div className="title-additional">
          <img src={item.img} alt="" />
          <h3>{item.title}</h3>
        </div>

        {featuresBasicData.map((item, i) => (
          <Feature item={item} key={i} showFeature={showFeature} />
        ))}
      </div>
    </div>
  );
}

export default PlanAdditional;
