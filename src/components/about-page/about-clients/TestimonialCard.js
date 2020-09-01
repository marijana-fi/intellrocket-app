import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className="col-12 col-md-6 mb-4 mb-md-0">
      <div className="testimonial-card">
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
  );
}

export default TestimonialCard;
