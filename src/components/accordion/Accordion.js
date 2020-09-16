import React, { useState, useRef, useEffect } from "react";
import "./accordion.scss";
import { Waypoint } from "react-waypoint";

function Accordion({
  itemIndex,
  title,
  content,
  handleToggle,
  activeIndex,
  animateAccordion,
  isLight,
}) {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [height, setHeight] = useState("0px");
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);
  const iconLight = isActive && !isLight ? "minus-light" : "plus-light";
  const icon = isActive ? "minus" : "plus";
  const iconLink = !isLight ? iconLight : icon;

  useEffect(() => {
    setIsActive(itemIndex === activeIndex);
  }, [itemIndex, activeIndex]);

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isActive, content]);

  const accordionRef = useRef(null);

  return (
    <Waypoint bottomOffset="40%" onEnter={animateAccordion} onLeave={() => setShouldAnimate(false)}>
      <div ref={accordionRef} className="accordion-item" onClick={() => handleToggle(itemIndex)}>
        <button className={`accordion ${isActive && "active"}`}>
          <h3 className="accordion__title">{title}</h3>
          <img src={`/intellrocket-app/img/bicycle/${iconLink}.png`} alt="" />
        </button>
        <div ref={contentRef} style={{ maxHeight: `${height}` }} className="accordion__content">
          <div className="accordion__text" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Waypoint>
  );
}

export default Accordion;
