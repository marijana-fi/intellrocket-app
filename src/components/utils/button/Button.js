import React, { useState } from "react";
import "./button.scss";
import { Waypoint } from "react-waypoint";

export default function Button({ name, label, animate, link }) {
  const [isVisible, setIsVisible] = useState(false);
  const animateBtn = () => {
    if (animate) {
      setIsVisible(true);
    }
  };

  return (
    <Waypoint onEnter={animateBtn}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className={isVisible ? `${name} btn-slide-in` : `${name} btn-hidden `}>
            {label}
          </button>
        </a>
      ) : (
        <button className={isVisible ? `${name} btn-slide-in` : `${name} btn-hidden `}>
          {label}
        </button>
      )}
    </Waypoint>
  );
}
