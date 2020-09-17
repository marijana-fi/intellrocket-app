import React from "react";
import Button from "../utils/button/Button";
import { Link } from "react-router-dom";

function PlanCard({ item, isVisible }) {
  const { title, amount, description, additional } = item;
  const show = isVisible ? "show" : "hidden";
  return (
    <div className={`${show} plan-card`}>
      <h3>{title}</h3>
      <p className="plan-desc">{description}</p>
      <h4 className="amount">
        {amount} <span className="slash">/ </span>
        <span className="price-text">per month</span>
      </h4>
      <p className="additional">{additional}</p>
      <Link to="/intellrocket-app/maintenance/pricing-plan">
        <Button name="btn btn-static" label="Choose your plan" />
      </Link>
    </div>
  );
}

export default PlanCard;
