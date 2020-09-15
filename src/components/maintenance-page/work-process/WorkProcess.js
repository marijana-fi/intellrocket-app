import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import processData from "./processData";
import "./work-process.scss";
import { gsap } from "gsap";
import { Waypoint } from "react-waypoint";

function WorkProcess() {
  const animateCard = (params) => {
    const tl = gsap.timeline();

    tl.to(
      ".process-card",
      {
        duration: 0.3,
        opacity: 1,
        ease: "circ.in",
        stagger: 0.15,
      },
      "-=0.1"
    );
  };

  return (
    <section id="work-process" className="margin-b-100">
      <div className="container">
        <div className="row text-center margin-b-100">
          <div className="col-12 col-lg-8 m-auto">
            <RevealTitle
              tag="p"
              title="Working with us is super easy!"
              customClass="colorize-text"
            />
            <RevealTitle tag="h2" title="How does it work?" />
            <RevealText
              tag="p"
              text="It will take only three easy steps and about a day to save your time and energy,providing your website a professional care."
            />
          </div>
        </div>
        <Waypoint bottomOffset="40%" onEnter={animateCard}>
          <div className="row">
            {processData.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-3 process-card" key={i}>
                <span className="step">{item.step}</span>
                <div className="step-wrap">
                  <h3>{item.title}</h3>
                  <img src="/intellrocket-app/img/maintenance/arrow-work.png" alt="" />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Waypoint>
      </div>
    </section>
  );
}

export default WorkProcess;
