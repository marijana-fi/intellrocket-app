import React, { useState, useEffect } from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import AccordionList from "../../accordion/AccordionList";
import { data } from "./supportFaqData";
import "./support-faq.scss";
import { gsap } from "gsap";
import { Waypoint } from "react-waypoint";

function SupportFaq({ isLight }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const contents = ["General", "Trust & Safety", "Services", "Billing", "Support"];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const animateItem = (params) => {
    const tl = gsap.timeline();
    tl.to(
      ".list-name",
      {
        duration: 0.3,
        opacity: 1,
        ease: "circ.in",
        stagger: 0.15,
      },
      "-=0.1"
    ).to(
      ".list-item",
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
    <section id="support-faq" className="margin-b ">
      <div className="container">
        <div className="row text-center margin-b-100">
          <div className="col-12 col-md-8 support-title m-auto">
            <RevealTitle tag="p" title="Testimonials" customClass="colorize-text mb-4" />
            <RevealTitle tag="h2" title="Have Questions?" titleSecond="We Have Answers!" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h3 className="list-name">Table Of Content</h3>
            <Waypoint bottomOffset="20%" onEnter={animateItem}>
              <ul className="content-list">
                {contents.map((item, i) => (
                  <li
                    className={i === activeIndex ? "colorize list-item" : "list-item"}
                    key={i}
                    onClick={() => handleClick(i)}
                  >
                    {item} <span className="pipe"> | </span>
                  </li>
                ))}
              </ul>
            </Waypoint>
          </div>
          <div className="col-md-7 faq-list">
            <AccordionList data={data[activeIndex]} parent=".faq-list" isLight={isLight} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportFaq;
