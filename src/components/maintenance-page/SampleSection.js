import React, { useState } from "react";
import RevealImage from "../utils/reveal-image/RevealImage";
import RevealText from "../utils/reveal-text/RevealText";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import { Waypoint } from "react-waypoint";

function SampleSection({ data, id, isLight }) {
  const [isVisible, setIsVisible] = useState(false);

  const themeTopImg = isLight ? data.top : data.topLight;
  const themeBottomImg = isLight ? data.bottom : data.bottomLight;
  const visible = isVisible ? "show" : "hidden";

  return (
    <section id={id} className="margin-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 sample-image mb-5 mb-lg-0">
            <Waypoint bottomOffset="40%" onEnter={() => setIsVisible(true)}>
              <div className={`top-img d-flex align-items-center ${visible}`}>
                <img src={themeTopImg} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </Waypoint>

            <RevealImage src={data.img} customClass="img-shadow" noDelay="true" />

            <div className={`bottom-img d-flex align-items-center ${visible}`}>
              <img src={themeBottomImg} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-12 col-md-6 sample-content">
            <RevealTitle tag="p" title={data.additional} customClass="colorize-text" />
            <RevealTitle tag="h2" title={data.title} />
            <RevealText tag="p" text={data.sub} />
            {data.text.map((item, i) => (
              <RevealText tag="p" text={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SampleSection;
