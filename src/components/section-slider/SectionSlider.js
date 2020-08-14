import React from "react";
import SliderCard from "./SliderCard";

const SectionSlider = ({ title, data }) => {
  return (
    <section id="section-work" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{title}</h2>
            <div className="slider">
              {data.map((item) => (
                <SliderCard item={item} />
              ))}
              <img src="/img/slider-imt.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
