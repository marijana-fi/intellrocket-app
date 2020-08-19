import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import "./reveal-text.scss";

import React, { useRef, useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

gsap.registerPlugin(SplitText);

const RevealText = (props) => {
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

  const animateText = (params) => {
    gsap.from(childSplit.lines, {
      duration: 0.8,
      yPercent: 100,
      ease: "strong.inOut",
      stagger: 0.1,
    });
  };

  return (
    <>
      <Waypoint onEnter={animateText}>
        <CustomTag ref={splitText} className="reveal-text">
          {props.text}
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealText;
