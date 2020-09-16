import React, { useState } from "react";
import Accordion from "./Accordion";
import { gsap } from "gsap";

function AccordionList({ data, parent, isLight }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index) => {
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  const animateAccordion = () => {
    const tl = gsap.timeline();

    tl.to(
      `${parent} .accordion-item`,
      {
        duration: 0.3,
        opacity: 1,
        ease: "circ.in",
        stagger: 0.15,
      },
      "-=0.1"
    );
  };

  return (
    <>
      {data.map((item, i) => (
        <Accordion
          isLight={isLight}
          animateAccordion={animateAccordion}
          key={i}
          itemIndex={i}
          activeIndex={activeIndex}
          title={item.title}
          handleToggle={handleToggle}
          content={item.content}
        />
      ))}
    </>
  );
}

export default AccordionList;
