import React, { useRef, useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

import "./logo-grid.scss";

function LogoGrid({ isLight, data = [], customClass = "" }) {
  const logoRef = useRef([]);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    logoRef.current = logoRef.current.slice(0, data?.length);
  }, [data]);

  const opacity = customClass === "opacity" ? 0.5 : 1;

  const animateLogo = () => {
    const tl = gsap.timeline({ duration: 1 });
    if (shouldAnimate) {
      logoRef.current.forEach((item, i) => {
        tl.to(logoRef.current[i], {
          duration: 0.15,
          opacity: opacity,
          ease: "circ.in",
        }).to(
          logoRef.current[i],
          {
            duration: 0.15,
            autoAlpha: 1,
            ease: "circ.in",
          },
          "-=0.2"
        );
      });
    }
  };

  return (
    <Waypoint onEnter={animateLogo} onLeave={() => setShouldAnimate(false)}>
      <div className="row">
        {data.map((item, i) => (
          <div className="col-4 col-md-3 col-lg-2 mb-5" key={i}>
            <div className={`${customClass} client-logo`} ref={(el) => (logoRef.current[i] = el)}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={isLight ? item.light : item.dark} alt={`${item.name} logo`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Waypoint>
  );
}

export default LogoGrid;
