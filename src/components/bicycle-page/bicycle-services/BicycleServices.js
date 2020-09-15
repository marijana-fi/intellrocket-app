import React from "react";
import RevealImage from "../../utils/reveal-image/RevealImage";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import "./bicycle-services.scss";
import AccordionList from "../../accordion/AccordionList";
import { faqData } from "../faqData";
import serviceData from "./serviceData";
import { Waypoint } from "react-waypoint";

function BicycleServices() {
  return (
    <section id="bicycle-services" className="margin-b-100">
      <div className="container">
        <div className="row d-flex flex-row-reverse align-items-center services">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="img-wrap">
              <RevealImage src="/intellrocket-app/img/bicycle/bicycle-services.png" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h2" title="Services" />
            <RevealText
              tag="p"
              text="Stay focused on your business, our team will take care of your website. We will provide you with an unique, extraordinary designed bicycle store, prepared for you to sell bikes online.s"
            />

            <AccordionList data={serviceData} parent=".services" />
          </div>
        </div>
        <div className="row align-items-center mobile">
          <div className="col-12 col-lg-6">
            <RevealImage src="/intellrocket-app/img/bicycle/bicycle-mobile.png" />
          </div>
          <div className="col-12 col-lg-6">
            <AccordionList data={faqData} parent=".mobile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BicycleServices;
