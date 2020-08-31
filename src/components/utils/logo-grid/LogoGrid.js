import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";
import logoData from "../../logoData";

function LogoGrid({ isLight }) {
  const logoRef = useRef(null);
  console.log(logoRef.current);
  const grid = [1, 6];

  const animateLogo = () => {
    gsap.to(logoRef.current, {
      duration: 0.4,
      opacity: 0.5,
      stagger: {
        amount: 1.5,
        grid: grid,
        axis: "x",
      },
    });
  };

  return (
    <Waypoint onEnter={() => animateLogo()}>
      <div className="row">
        {logoData.map((item, i) => (
          <div className="col-4 col-md-3 col-lg-2 client-logo mb-3" key={i} ref={logoRef}>
            <a href={item.url}>
              <img src={isLight ? item.light : item.dark} alt={`${item.name} logo`} />
            </a>
          </div>
        ))}
      </div>
    </Waypoint>
  );
}

export default LogoGrid;
