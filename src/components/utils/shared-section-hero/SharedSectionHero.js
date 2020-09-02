import React from "react";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";
import "./shared-section-hero.scss";

import OpenImage from "../open-image/OpenImage";
import RotateText from "../rotate-text/RotateText";

function SharedSectionHero({ data, customClass }) {
  return (
    <section id="shared-hero" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 mb-lg-5">
            <RevealTitle
              tag="h1"
              title={data.title}
              customClass={customClass}
              rotate={data.rotating}
            />
            {/* <RotateText tag="div" text={data.rotating} customClass="rotate-text" />; */}
            <RevealText tag="p" text={data.desc} />
          </div>
          <div className="col-12 col-lg-12 ">
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
