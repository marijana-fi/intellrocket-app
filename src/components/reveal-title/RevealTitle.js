import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import React, { useRef, useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-title.scss";

gsap.registerPlugin(SplitText);

const RevealTitle = (props) => {
  const splitText = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [childSplit, setChildSplit] = useState(false);
  const [parentSplit, setParentSplit] = useState(false);

  useEffect(() => {
    let child = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-child",
    });

    setChildSplit(child);

    let parent = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-parent",
    });

    setParentSplit(parent);
  }, []);

  const CustomTag = `${props.tag}`;

  const animateTitle = (params) => {
    gsap.from(childSplit.lines, {
      duration: 1,
      yPercent: 100,

      ease: "strong.inOut",
      stagger: 0.1,
      delay: 0.4,
    });
  };

  return (
    <>
      <Waypoint onEnter={animateTitle}>
        <CustomTag ref={splitText} className="reveal-title">
          {props.title}
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealTitle;
