import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import "./service-hero.scss";

import OpenImage from "../../utils/open-image/OpenImage";

function ServiceHero() {
  return (
    <section id="service-hero" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mb-5">
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
          <div className="col-7 col-lg-12 offset-5 offset-lg-0">
            <div className="img-wrap">
              <div className="img-large">
                <OpenImage
                  url="/intellrocket-app/img/services/service-hero-01.jpg"
                  customClass="right"
                />
              </div>
              <div className="img-small">
                <OpenImage
                  url="/intellrocket-app/img/services/service-hero-02.jpg"
                  customClass="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
