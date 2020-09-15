import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-image.scss";

function RevealImage({ src, alt, noDelay }) {
  const [isVisible, setIsVisible] = useState(false);

  const notDelay = noDelay ? "no-delay" : null;

  return (
    <div id="reveal-image">
      <Waypoint bottomOffset="40%" onEnter={() => setIsVisible(true)}>
        <img src={src} alt={alt} className={isVisible ? `show ${notDelay}` : ""} />
      </Waypoint>
    </div>
  );
}

export default RevealImage;
