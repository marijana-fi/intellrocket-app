import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./open-image.scss";

const OpenImage = ({ url, customClass }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Waypoint onEnter={() => setIsVisible(true)} bottomOffset="200px">
        <div className="overlay">
          <img src={url} alt="" />
          <div className={isVisible ? `over-white ${customClass}` : "over-white"}></div>
          <div className={isVisible ? `over ${customClass} open` : `over ${customClass}`}></div>
        </div>
      </Waypoint>
    </div>
  );
};

export default OpenImage;
