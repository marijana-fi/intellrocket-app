import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

function TestimonialCard({ item }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Waypoint bottomOffset="200px" onEnter={() => setIsVisible(true)}>
      <div className="col-12 col-md-6 mb-4 mb-md-4">
        <div className={isVisible ? "testimonial-card show" : "testimonial-card hidden"}>
          <div className="content-wrapper mb-4">
            <div className="d-flex align-items-center ">
              <div className="person-image">
                <img src={item.image} alt="" />
              </div>
              <div className="info-wrap d-flex ">
                <div className="info">
                  <h3 className="name">{item.name}</h3>
                  <p className="role">{item.role}</p>
                </div>
              </div>
            </div>
            <div className="rating mb-4 mb-sm-0">
              <ul className="d-flex">
                <li>
                  <img src="/intellrocket-app/img/about/star-icon.svg" alt="" />
                </li>
                <li>
                  <img src="/intellrocket-app/img/about/star-icon.svg" alt="" />
                </li>
                <li>
                  <img src="/intellrocket-app/img/about/star-icon.svg" alt="" />
                </li>
                <li>
                  <img src="/intellrocket-app/img/about/star-icon.svg" alt="" />
                </li>
                <li>
                  <img src="/intellrocket-app/img/about/star-icon.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <p className="testimonial ">{item.comment}</p>
        </div>
      </div>
    </Waypoint>
  );
}

export default TestimonialCard;
