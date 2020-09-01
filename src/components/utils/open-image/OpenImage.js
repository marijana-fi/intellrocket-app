import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./open-image.scss";

const OpenImage = ({ url, customClass }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Waypoint onEnter={() => setIsVisible(true)} bottomOffset="300px">
      <div className="overlay">
        <img src={url} alt="" />
        <div
          className={isVisible ? `over-first ${customClass} open` : ` over-first ${customClass}`}
        ></div>
        <div className={isVisible ? `over ${customClass} open` : `over ${customClass}`}></div>
      </div>
    </Waypoint>
  );
};

export default OpenImage;
