import React from "react";
import "./info-card.scss";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

function InfoCard({ item, customClass }) {
  const animateCard = () => {
    gsap.to(".info-card", {
      duration: 0.7,
      opacity: 1,
      stagger: 0.15,
    });
  };

  return (
    <Waypoint bottomOffset="200px" onEnter={() => animateCard()}>
      <div className="col-12 col-sm-6  col-xl-4 mb-4">
        <div className={`info-card ${customClass} d-flex flex-column align-items-center`}>
          <img src={item.img} alt="" />
          <h4>{item.title}</h4>
          <p className="info-text">{item.info}</p>
        </div>
      </div>
    </Waypoint>
  );
}

export default InfoCard;
