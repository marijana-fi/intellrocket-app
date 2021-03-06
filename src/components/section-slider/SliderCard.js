import React, { useRef, useState, useEffect } from "react";
import "./slider-card.scss";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";

gsap.registerPlugin(SplitText);

const SliderCard = ({ item, path }) => {
  const splitTop = useRef(null);
  const splitBottom = useRef(null);
  const [once, setOnce] = useState(false);
  const [splitTopChar, setSplitTopChar] = useState(null);
  const [splitBottomChar, setSplitBottomChar] = useState(null);
  const [tlTop, setTlTop] = useState(null);

  const sliderRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    setTlTop(tl);

    const splitTopWord = new SplitText(splitTop.current, { type: "chars, words" });
    setSplitTopChar(splitTopWord);

    // hover
    const splitBottomWord = new SplitText(splitBottom.current, {
      type: "chars, words",
      charsClass: "bottom-char",
    });
    setSplitBottomChar(splitBottomWord);
  }, []);

  const animateTop = () => {
    if (once) {
      tlTop.play();
      return;
    }
    tlTop
      .to(splitTopChar.chars, {
        duration: 0.1,
        y: -5,
        opacity: 0,
        stagger: 0.02,
      })
      .to(
        splitBottomChar.chars,
        {
          duration: 0.1,
          y: 0,
          opacity: 1,
          stagger: 0.02,
        },
        0.1
      );
  };

  const handleLeave = (params) => {
    tlTop.reverse();
  };

  const handleEnter = (params) => {
    animateTop();
    setOnce(true);
  };

  return (
    <>
      <Link
        to={`/intellrocket-app/${path}`}
        onFocus={() => handleEnter()}
        onBlur={() => handleLeave()}
      >
        <div
          id="slider-item"
          onMouseEnter={() => handleEnter()}
          onMouseLeave={() => handleLeave()}
          ref={sliderRef}
        >
          <img src={item.image} alt={item.title} />
          <div className="slider-text-wrap">
            <h4>{item.title}</h4>
            <div className="text-desc-wrap">
              <span className="line"></span>
              <div className="slider-text-desc" ref={splitTop}>
                {Array.isArray(item.desc) ? (
                  item.desc.map((el, i) => <span key={i}>{el} </span>)
                ) : (
                  <h5>{item.desc}</h5>
                )}
              </div>
              <h5 className="slider-text-hover" ref={splitBottom}>
                {item.hover}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SliderCard;
