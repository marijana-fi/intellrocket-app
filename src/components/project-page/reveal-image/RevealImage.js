import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./reveal-image.scss";

function RevealImage({ src, alt }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div id="reveal-image">
      <Waypoint bottomOffset="200px" onEnter={() => setIsVisible(true)}>
        <img src={src} alt={alt} className={isVisible ? "show" : ""} />
      </Waypoint>
    </div>
  );
}

export default RevealImage;
