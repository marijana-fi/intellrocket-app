import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import ExploreButton from "../../explore-button/ExploreButton";
import RevealImage from "../../utils/reveal-image/RevealImage";
import "./bicycle-hero.scss";
import RevealText from "../../utils/reveal-text/RevealText";

function BicycleHero({ handleScroll }) {
  return (
    <section id="bicycle-hero" className="margin-b-100">
      <div className="container">
        <div className="row align-items-center d-flex flex-row-reverse">
          <div className="col-12 col-lg-6">
            <div className="img-wrap">
              <RevealImage src="/intellrocket-app/img/bicycle/bicycle-hero.png" noDelay="true" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h1" title="Bicycle Website Design & Wordpress Development" />
            <RevealText
              tag="p"
              text="Save money and time, sell your bicycles fastly and on budget!"
            />
            <ExploreButton handleScroll={handleScroll} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BicycleHero;
