import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import React, { useRef, useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-title.scss";

gsap.registerPlugin(SplitText);

const RevealTitle = ({ title, tag, customClass = "", rotate = [] }) => {
  const splitText = useRef(null);
  const itemsRef = useRef([]);

  const [childSplit, setChildSplit] = useState(false);
  const [parentSplit, setParentSplit] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, rotate.length);
  }, [rotate]);

  useEffect(() => {
    let child = new SplitText(splitText.current, {
      type: "lines",
      linesClass: "split-child",
    });

    setChildSplit(child);

    let parent = new SplitText(splitText.current, {
      type: " lines",
      linesClass: "split-parent",
    });

    setParentSplit(parent);
  }, []);

  const CustomTag = `${tag}`;

  const animateTitle = (params) => {
    if (shouldAnimate) {
      gsap.from(childSplit.lines, {
        duration: 1,
        yPercent: 100,
        ease: "strong.inOut",
        stagger: 0.1,
      });
    }

    //rotate-text
    const tl = gsap.timeline({ repeat: -1, delay: 0.5 });
    if (shouldAnimate) {
      itemsRef.current.forEach((item, i) => {
        tl.from(
          itemsRef.current[i],
          {
            duration: 0.5,
            rotateX: -95,
            autoAlpha: 0,
            ease: "expo.out",
            y: 35,
          },
          "-=0.1"
        )
          .to(
            itemsRef.current[i],
            {
              duration: 0.5,
              rotateX: 0,
              autoAlpha: 1,
              ease: "expo.out",
              y: 0,
            },
            "-=.1"
          )
          .to(
            itemsRef.current[i],
            {
              duration: 0.5,
              rotateX: 95,
              autoAlpha: 0,
              ease: "expo.out",
              y: -30,
              delay: 2,
            },
            "-=.1"
          );
      });
    }
  };

  return (
    <>
      <Waypoint onEnter={animateTitle} onLeave={() => setShouldAnimate(false)}>
        <CustomTag ref={splitText} className={`reveal-title ${customClass}`}>
          {title}
          <div className="rotate-text">
            {rotate.map((item, i) => (
              <span ref={(el) => (itemsRef.current[i] = el)} className="rotating" key={i}>
                {item}
              </span>
            ))}
          </div>
        </CustomTag>
      </Waypoint>
    </>
  );
};

export default RevealTitle;
