import React, { useRef, useEffect, useState } from "react";
import "./team-section.scss";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealSingleLine from "../../utils/reveal-single-line/RevealSingleLine";
import Button from "../../utils/button/Button";
import teamData, { innerData, middleData, outerData } from "./teamData";
import { gsap, Back } from "gsap";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";
import RevealTitle from "../../utils/reveal-title/RevealTitle";

function TeamSection() {
  const circleInnerRef = useRef(null);
  const circleMiddleRef = useRef(null);
  const circleOuterRef = useRef(null);
  const circleWrapRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [heightWrap, sethHeightWrap] = useState(true);

  const [tl, setTl] = useState(null);

  const heightInner = circleInnerRef.current?.clientWidth;
  const heightMiddle = circleMiddleRef.current?.clientWidth;
  const heightOuter = circleOuterRef.current?.clientWidth;

  useEffect(() => {
    sethHeightWrap(circleWrapRef.current?.clientWidth);

    const handleWindowResize = () => {
      sethHeightWrap(circleWrapRef.current?.clientWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();
    setTl(tl);
  }, []);

  const animateCircle = () => {
    if (shouldAnimate) {
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
    }
  };

  return (
    <section id="about-team" className="margin-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-5">
            <Waypoint
              bottomOffset="200px"
              onEnter={() => animateCircle()}
              onLeave={() => setShouldAnimate(false)}
            >
              <div
                className="circle-wrap"
                ref={circleWrapRef}
                style={{ height: `${heightWrap}px` }}
              >
                <div
                  ref={circleInnerRef}
                  style={{ height: `${heightInner}px` }}
                  className="circle-inner circle"
                >
                  <div className="circle-bg"></div>
                  {innerData.map((item, i) => (
                    <div className="team-avatar" key={i}>
                      <img src={item.url} alt="" />
                    </div>
                  ))}
                </div>
                <div
                  ref={circleMiddleRef}
                  style={{ height: `${heightMiddle}px` }}
                  className="circle-middle circle"
                >
                  <div className="circle-bg"></div>
                  {middleData.map((item, i) => (
                    <div className="team-avatar" key={i}>
                      <img src={item.url} alt="" />
                    </div>
                  ))}
                </div>
                <div ref={circleOuterRef} className="circle-outer circle">
                  <div className="circle-bg"></div>

                  {outerData.map((item, i) => (
                    <div className="team-avatar" key={i}>
                      <img src={item.url} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </Waypoint>
          </div>
          <div className="col-12 col-lg-5 ml-lg-5">
            <div className="text-wrap">
              <RevealTitle tag="h5" title="meet the team" customClass="colorize-text" />
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
            <Link to="/intellrocket-app/careers">
              <Button name="btn" label="Join The Team" animate="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
