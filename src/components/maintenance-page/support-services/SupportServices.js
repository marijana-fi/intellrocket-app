import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import supportData, { listSupportData } from "./supportData";
import "./support-services.scss";
import { gsap } from "gsap";
import { Waypoint } from "react-waypoint";

function SupportServices({ isLight }) {
  const animateCard = (params) => {
    const tl = gsap.timeline();

    tl.to(
      ".support-card",
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
    <section id="support" className="margin-b-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 title-wrap">
            <RevealTitle tag="h2" title="Wordpress Support Services" />
            <RevealText tag="p" text="Never experience a single WordPress tech issue again." />
          </div>
          {supportData.map((item, i) => (
            <Waypoint bottomOffset="20%" onEnter={animateCard} key={i}>
              <div className="col-12 col-md-6 col-xl-4 text-center mb-5 support-card">
                <img src={isLight ? item.img : item.imgDark} alt="" />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Waypoint>
          ))}
          <div className="col-12 ">
            <div className="box-wrap">
              {listSupportData.map((item, i) => (
                <ul key={i}>
                  {item.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportServices;
