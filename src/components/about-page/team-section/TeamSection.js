import React, { useRef, useEffect, useState } from "react";
import "./team-section.scss";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealSingleLine from "../../utils/reveal-single-line/RevealSingleLine";
import Button from "../../utils/button/Button";
import teamData from "./teamData";
import { gsap, Bounce, Back } from "gsap";
import { Waypoint } from "react-waypoint";

function TeamSection() {
  const circleInnerRef = useRef(null);
  const circleMiddleRef = useRef(null);
  const circleOuterRef = useRef(null);

  const [tl, setTl] = useState(null);

  useEffect(() => {
    let tl = gsap.timeline();
    setTl(tl);
  }, []);

  const animateCircle = () => {
    tl.fromTo(
      circleInnerRef.current,
      { opacity: 0, scale: 0, transformOrigin: "center" },
      { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut }
    )
      .fromTo(
        circleMiddleRef.current,
        { opacity: 0, scale: 0, transformOrigin: "center" },
        { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut },
        "-=0.8"
      )
      .fromTo(
        circleOuterRef.current,
        { opacity: 0, scale: 0, transformOrigin: "center" },
        { opacity: 1, duration: 1, scale: 1, transformOrigin: "center", ease: Back.easeOut },
        "-=0.8"
      )
      .fromTo(
        ".team",
        {
          opacity: 0,
          scale: 0,
        },
        { opacity: 1, scale: 1, ease: Back.easeOut },
        "-=0.8"
      );
  };

  return (
    <section id="about-team" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Waypoint bottomOffset="200px" onEnter={() => animateCircle()}>
              <div className="circle-wrap">
                <div className="team">
                  {teamData.map((item, i) => (
                    <img key={i} src={item.url} alt="" className="team-avatar" />
                  ))}
                </div>
                <svg
                  width="690"
                  height="690"
                  viewBox="0 0 690 690"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    ref={circleOuterRef}
                    cx="345"
                    cy="345"
                    r="345"
                    fill="#FF2E2E"
                    fillOpacity="0.2"
                    className="circle"
                  />
                  <path
                    ref={circleMiddleRef}
                    d="M575 345C575 472.025 472.025 575 345 575C217.975 575 115 472.025 115 345C115 217.975 217.975 115 345 115C472.025 115 575 217.975 575 345Z"
                    fill="#FF2E2E"
                    fillOpacity="0.2"
                    className="circle"
                  />

                  <path
                    ref={circleInnerRef}
                    d="M455 345C455 405.751 405.751 455 345 455C284.249 455 235 405.751 235 345C235 284.249 284.249 235 345 235C405.751 235 455 284.249 455 345Z"
                    fill="#FF2E2E"
                    fillOpacity="0.2"
                    className="circle"
                  />
                </svg>
              </div>
            </Waypoint>
          </div>
          <div className="col-12 col-lg-5">
            <div className="text-wrap">
              <RevealText tag="h5" text="meet the team" />
              <RevealSingleLine tag="h3" text="who we are" />
              <RevealText
                tag="p"
                text="IntellRocket is an innovative company in the
fields of web development and web design.
We’re based in Belgrade, Serbia but our work is
international. Our creative and ambitious team
speaks the universal language of technology."
              />
            </div>
            <Button name="btn" label="Join The Team" animate="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
