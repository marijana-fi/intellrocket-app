import React, { useState } from "react";
import Button from "../button/Button";
import "./section-quote.scss";
import { Waypoint } from "react-waypoint";
import RevealTitle from "../reveal-title/RevealTitle";

const SectionQuote = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section id="section-quote">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h3" title="Let’s Make Something Beautiful Together" />
          </div>
          <div className="col-12 col-lg-3">
            <Waypoint onEnter={() => setIsVisible(true)}>
              <div>
                <Button name={isVisible ? "btn btn-slide-in" : "btn"} label="Get a Quote" />
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionQuote;
