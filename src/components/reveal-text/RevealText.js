import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import React, { useRef, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-text.scss";

gsap.registerPlugin(SplitText);

function RevealText({ tag, text }) {
  const splitText = useRef(null);

  useEffect(() => {
    var childSplit = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-child",
    });
    var parentSplit = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-parent",
    });

    setTimeout(() => {
      gsap.from(childSplit.lines, { duration: 1.5, yPercent: 100, ease: "power4", stagger: 0.1 });
    }, 300);
  }, []);
  const CustomTag = `${tag}`;
  console.log(tag);
  return (
    <Waypoint>
      <CustomTag ref={splitText} className="reveal-text">
        {text}
      </CustomTag>
    </Waypoint>
  );
}

export default RevealText;
