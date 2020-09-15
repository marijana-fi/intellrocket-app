import React from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";

import AccordionList from "../accordion/AccordionList";
import { faqDataSecond } from "./faqData";
import { faqData } from "./faqData";

function Faq() {
  return (
    <section id="faq" className="margin-b-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <RevealTitle tag="h2" title="Frequently Asked Questions" />
          </div>
          <div className="col-12 col-lg-6 first">
            <AccordionList data={faqData} parent=".first" />
          </div>
          <div className="col-12 col-lg-6 second">
            <AccordionList data={faqDataSecond} parent=".second" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
