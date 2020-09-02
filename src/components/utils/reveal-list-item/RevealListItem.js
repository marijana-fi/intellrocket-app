import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-list-item.scss";

gsap.registerPlugin(SplitText);

const RevealListItem = (props) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const CustomTag = `${props.tag}`;

  const animateListItem = (params) => {
    if (shouldAnimate) {
      gsap.to(`.reveal-list-item-${props.index} > li span`, {
        duration: 1,
        y: 0,
        ease: "strong.inOut",
        stagger: 0.3,
        delay: 1,
      });
    }
  };

  return (
    <>
      <Waypoint onEnter={animateListItem} onLeave={() => setShouldAnimate(false)}>
        <CustomTag className={`reveal-list-item-${props.index}`}>
          {props.text.map((item, i) => (
            <li key={i} className="overflow-wrapper">
              <span className="list-item">{item}</span>
            </li>
          ))}
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealListItem;
