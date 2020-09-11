import React from "react";
import serviceData from "../serviceData";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import "./service-approach.scss";

function ServiceApproach() {
  return (
    <section id="service-approach">
      <div className="container">
        <div className="row">
          {serviceData.list.map((item, i) => (
            <div className="col-md-6 offset-md-3" key={i}>
              <div className="list-item mb-5">
                <RevealTitle tag="h3" title={item.title} />
                <RevealText tag="p" text={item.text} borderBottom="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceApproach;
