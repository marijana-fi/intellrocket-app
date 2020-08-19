import React from "react";
import "./slider-card.scss";

const SliderCard = ({ item }) => {
  return (
    <div id="slider-item">
      <img src={item.image} alt="" />
      <div className="slider-text-wrap">
        <h4>{item.title}</h4>
        <div className="text-desc-wrap">
          <span className="line"></span>
          <h5 className="slider-text-desc">{item.desc}</h5>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
