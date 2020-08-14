import React from "react";
import Button from "../button/Button";
import "./section-quote.scss";

const SectionQuote = () => {
  return (
    <section id="section-quote">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-lg-6">
            <h3>Let’s Make Something Beautiful Together</h3>
          </div>
          <div className="col-12 col-lg-3">
            <Button name="btn" label="Get a Quote" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionQuote;
