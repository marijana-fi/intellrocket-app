import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

import "./logo-grid.scss";

function LogoGrid({ isLight, data, customClass = "" }) {
  const logoRef = useRef(null);

  // const grid = [1, 6];

  const animateLogo = () => {
    if (customClass === "opacity") {
      gsap.to(".opacity", {
        duration: 0.4,
        opacity: 0.5,
        stagger: 0.15,
      });
    } else
      gsap.to(".client-logo", {
        duration: 0.4,
        opacity: 1,
        stagger: 0.15,
      });
  };

  return (
    <Waypoint onEnter={() => animateLogo()}>
      <div className="row">
        {data.map((item, i) => (
          <div className="col-4 col-md-3 col-lg-2 mb-3" key={i} ref={logoRef}>
            <div className={`${customClass} client-logo`}>
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
