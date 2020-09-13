import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import "./open-image.scss";

const OpenImage = ({ url, customClass, title = "", isImgVisible, setIsImgVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgVisible = isImgVisible || isVisible;

  return (
    <Waypoint
      onEnter={() => (setIsImgVisible ? setIsImgVisible(true) : setIsVisible(true))}
      bottomOffset="60%"
    >
      <div className={imgVisible ? `overlay ${customClass}` : "overlay"}>
        <figure>
          <img src={url} alt="" />
        </figure>
      </div>
    </Waypoint>
  );
};

export default OpenImage;
