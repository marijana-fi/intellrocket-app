import React from "react";

function TestimonialCard({ item }) {
  return (
    <div className="col-12 col-md-6">
      <div className="testimonial-card">
        <div className="person-image">
          <img src={item.image} alt="" />
        </div>
        <h3 className="name">{item.name}</h3>
        <p className="role">{item.role}</p>
        <p className="testimonial">{item.comment}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
