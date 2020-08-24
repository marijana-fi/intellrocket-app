import React, { useRef, useEffect, useState } from "react";
import "./section-slider.scss";
import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from "./SliderArrow";
import { Waypoint } from "react-waypoint";
import { gsap } from "gsap";

const SectionSlider = ({ title, data, toFilter }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    rows: 1,
    adaptiveHeight: true,
    variableWidth: true,
  };

  const [sliderTl, setSliderTl] = useState(null);

  const animateSlider = (params) => {
    sliderTl.to("#slider-item", {
      duration: 0.6,
      opacity: 1,
      x: 0,
      stagger: 0.2,
    });
  };

  useEffect(() => {
    let tl = gsap.timeline();
    setSliderTl(tl);
  }, []);

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
            <Waypoint onEnter={() => animateSlider()}>
              <div>
                <Slider {...settings} ref={sliderRef}>
                  {data
                    .filter((item) => item.title !== toFilter)
                    .map((item) => (
                      <SliderCard item={item} key={item.title} />
                    ))}
                </Slider>
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSlider;
