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

  useEffect(() => {
    function handleResize(e) {
      console.log(e);
    }
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  const CustomTag = `${props.tag}`;

  const animateText = (params) => {
    if (shouldAnimate) {
      gsap.to(childSplit.lines, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "sine.inOut",
        stagger: 0.05,
        delay: 0.5,
      });
    }
  };

  useEffect(() => {
    const handleResize = (params) => {
      childSplit.revert();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [childSplit]);

  return (
    <>
      <Waypoint onEnter={animateText} onLeave={() => setShouldAnimate(false)}>
        <CustomTag ref={splitText} className="reveal-text">
          {CustomTag == "ul" ? <li>{props.text}</li> : props.text}
          {props.borderBottom ? <span></span> : null}
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealText;
