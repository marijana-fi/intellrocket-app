import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import "./open-image.scss";

const OpenImage = ({ url, customClass, isWorkList, setIsImgVisible }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isWorkList && isVisible) {
      setIsImgVisible(true);
    }
  }, [isVisible, setIsImgVisible, isWorkList]);

  return (
    <Waypoint onEnter={() => setIsVisible(true)} bottomOffset="56%">
      <div className={isVisible ? `overlay ${customClass}` : "overlay"}>
        <figure>
          <img src={url} alt="" />
        </figure>
      </div>
    </Waypoint>
  );
};

export default OpenImage;
