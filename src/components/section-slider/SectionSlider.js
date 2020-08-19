import React, { useRef } from "react";
import "./section-slider.scss";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "./SliderArrow";

const SectionSlider = ({ title, data }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    adaptiveHeight: true,
    variableWidth: true,
  };

  const sliderRef = useRef(null);
  return (
    <section id="section-slider" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-wrap ">
              <h2>{title}</h2>
              <div className="arrow-wrap">
                <SliderArrow type="prev" onClick={() => sliderRef.current.slickPrev()} />
                <SliderArrow type="next" onClick={() => sliderRef.current.slickNext()} />
              </div>
            </div>
          </div>
          <div className="col-12">
            <Slider {...settings} ref={sliderRef}>
              {data.map((item) => (
                <SliderCard item={item} key={item.title} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
