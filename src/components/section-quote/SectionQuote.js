import React from "react";
import Button from "../utils/button/Button";
import "./section-quote.scss";

import RevealTitle from "../utils/reveal-title/RevealTitle";

const SectionQuote = () => {
  return (
    <section id="section-quote">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h3" title="Let’s Make Something Beautiful Together" />
          </div>
          <div className="col-12 col-lg-3">
            <Button name="btn" label="Get a Quote" animate="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionQuote;
