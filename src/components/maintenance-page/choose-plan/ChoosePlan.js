import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import Button from "../../utils/button/Button";
import "./choose-plan.scss";
import { Link } from "react-router-dom";

function ChoosePlan() {
  return (
    <section id="choose-plan" className="margin-b-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <RevealTitle
              tag="h4"
              title="no matter how small or big your company is, we have price lists for everyone's pocket!"
            />
            <RevealTitle tag="h2" title="Try it, 50% Off First Month" />
            <RevealText tag="p" text="By paying annually, you get a 20% discount" />
            <Link to="/intellrocket-app/maintenance/pricing-plan">
              <Button name="btn" label="Choose your plan" animate="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChoosePlan;
