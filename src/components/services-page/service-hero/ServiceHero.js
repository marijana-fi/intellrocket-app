import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import "./service-hero.scss";

function ServiceHero() {
  return (
    <section id="service-hero" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mb-5">
            <RevealTitle
              tag="h1"
              title="We design, create and manage unique digital experiences."
            />
            <RevealText
              tag="p"
              text="IntellRocket develops outstanding online solutions with a mix of technology,
               innovative designs, and reliable strategies. This unique blend allows us to help
               our clients connect with a wider range of consumers."
            />
          </div>
          <div className="col-lg-7 offset-lg-5">
            <div>
              <img src="/intellrocket-app/img/services/service-hero-01.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
