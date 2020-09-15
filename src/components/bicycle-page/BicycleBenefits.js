import React from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import RevealImage from "../utils/reveal-image/RevealImage";
import { faqData } from "./faqData";
import AccordionList from "../accordion/AccordionList";

function BicycleBenefits() {
  return (
    <section id="bicycle-benefits" className="margin-b-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center mb-4 mb-lg-5">
            <RevealTitle tag="h2" title="Benefits" />
            <RevealText tag="p" text="What will you actually get" />
          </div>
          <div className="col-12 col-lg-6">
            <RevealImage src="/intellrocket-app/img/bicycle/bicycle-benefits.png" />
          </div>
          <div className="col-12 col-lg-6">
            <AccordionList data={faqData} parent="#bicycle-benefits" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BicycleBenefits;
