import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";

function Testimonials() {
  return (
    <section className="margin-b ">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <RevealTitle tag="p" title="Testimonials" customClass="colorize-text mb-4" />
            <RevealTitle tag="h2" title="What our clients say" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
