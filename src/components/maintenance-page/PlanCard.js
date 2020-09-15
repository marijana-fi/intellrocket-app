import React from "react";
import Button from "../utils/button/Button";

function PlanCard({ item, isVisible }) {
  const { title, amount, description, additional } = item;
  const show = isVisible ? "show" : "hidden";
  return (
    <div className={`${show} plan-card mb-4 mb-lg-0`}>
      <h3>{title}</h3>
      <p className="plan-desc">{description}</p>
      <h4 className="amount">
        {amount} <span className="slash">/ </span>
        <span className="price-text">per month</span>
      </h4>
      <p className="additional">{additional}</p>
      <Button name="btn btn-static" label="Choose your plan" />
    </div>
  );
}

export default PlanCard;
