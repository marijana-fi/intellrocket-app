import React from "react";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";
import "./shared-section-hero.scss";

import OpenImage from "../open-image/OpenImage";

function SharedSectionHero({ data }) {
  return (
    <section id="service-hero" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mb-5">
            <RevealTitle tag="h1" title={data.title} />
            <RevealText tag="p" text={data.desc} />
          </div>
          <div className="col-7 col-lg-12 offset-5 offset-lg-0">
            <div className="img-wrap">
              <div className="img-large">
                <OpenImage url={data.urlFirst} customClass="right" />
              </div>
              <div className="img-small">
                <OpenImage url={data.urlSecond} customClass="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SharedSectionHero;
