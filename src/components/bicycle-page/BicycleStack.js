import React from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import RevealText from "../utils/reveal-text/RevealText";
import "./bicycle-page.scss";
import LogoGrid from "../utils/logo-grid/LogoGrid";
import stackData from "./stackData";

function BicycleStack({ isLight }) {
  return (
    <section className="margin-b-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-7 stack-title m-auto">
            <RevealTitle tag="h2" title="Our Stack" />
            <RevealText
              tag="p"
              text="We've worked with some of the brightest Sillicon Valley start-ups, as well a range of established European business."
            />
            {isLight ? (
              <img src="/intellrocket-app/img/bicycle/map-light.png" alt="" />
            ) : (
              <img src="/intellrocket-app/img/bicycle/map-dark.png" alt="" />
            )}
          </div>
        </div>
        <LogoGrid isLight={isLight} data={stackData} />
      </div>
    </section>
  );
}

export default BicycleStack;
