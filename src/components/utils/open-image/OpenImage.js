import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./open-image.scss";

const OpenImage = ({ url, customClass, title = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Waypoint onEnter={() => setIsVisible(true)} bottomOffset="300px">
      <div className={isVisible ? `overlay ${customClass}` : "overlay"}>
        <figure>
          <img src={url} alt="" />
        </figure>
      </div>
    </Waypoint>
  );
};

export default OpenImage;
