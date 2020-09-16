import React, { useRef, useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import SliderArrow from "../../section-slider/SliderArrow";
import Slider from "react-slick";

function TestimonialSlider({ data }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [limit, setLimit] = useState();

  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    rows: 1,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    setLimit(data.length);
  }, [data]);

  const handlePrev = (params) => {
    sliderRef.current.slickPrev();
    if (activeIndex > 1) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(limit);
    }
  };

  const handleNext = (params) => {
    sliderRef.current.slickNext();
    if (activeIndex < limit) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(1);
    }
  };

  return (
    <Waypoint onEnter={() => setIsVisible(true)}>
      <div id="slider-testimonial">
        <SliderArrow type="prev" onClick={handlePrev} />
        <Slider {...settings} ref={sliderRef}>
          {data.map((item, i) => (
            <div className="container row" key={i}>
              <div className="col-12 col-md-8 m-auto">
                <div className={isVisible ? "show" : "hidden"}>
                  <h4 className="comment">{item.comment}</h4>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="current-slide">
          <span className="slider-number">{activeIndex}</span>
          <span className="slider-line"></span>
          <span className="slider-number">{data.length}</span>
        </div>

        <SliderArrow type="next" onClick={handleNext} />
      </div>
    </Waypoint>
  );
}

export default TestimonialSlider;
