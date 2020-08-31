import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import "./reveal-text.scss";

import React, { useRef, useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const RevealText = (props) => {
  const splitText = useRef(null);
  const [childSplit, setChildSplit] = useState(false);
  const [parentSplit, setParentSplit] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    let child = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "text-split-child",
    });

    setChildSplit(child);

    let parent = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "text-split-parent",
    });

    setParentSplit(parent);
  }, []);

  const CustomTag = `${props.tag}`;

  const animateText = (params) => {
    if (shouldAnimate) {
      gsap.from(childSplit.lines, {
        duration: 0.6,
        opacity: 0,
        y: 50,
        ease: "power1",
        stagger: 0.05,

        delay: 0.5,
      });
    }
  };

  return (
    <>
      <Waypoint onEnter={animateText} onLeave={() => setShouldAnimate(false)}>
        <CustomTag ref={splitText} className="reveal-text">
          {props.text}
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealText;
