import React from "react";
import "./slider-arrow.scss";

function SliderArrow(props) {
  const { type, ...rest } = props;
  return (
    <button className={type === "next" ? "slider-arrow" : "slider-arrow prev"} {...rest}>
      <svg
        version="1.2"
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
      >
        {" "}
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M18.416,24.5L32.584,24.5"
          className="XVpfmXCG_0"
        ></path>{" "}
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M27.529,19.541L32.488,24.5L27.529,29.459"
          className="XVpfmXCG_1"
        ></path>{" "}
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M18.416,24.5L32.584,24.5"
          className="XVpfmXCG_4"
        ></path>{" "}
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M27.529,19.541L32.488,24.5L27.529,29.459"
          className="XVpfmXCG_5"
        ></path>{" "}
        <path
          fill="none"
          stroke="#888888"
          strokeMiterlimit="10"
          d="M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"
          className="XVpfmXCG_2"
        ></path>{" "}
        <path
          fill="none"
          strokeMiterlimit="10"
          d="M4.844999999999999,24.363A20,20 0,1,1 44.845,24.363A20,20 0,1,1 4.844999999999999,24.363"
          className="XVpfmXCG_3"
        ></path>{" "}
      </svg>
    </button>
  );
}

export default SliderArrow;
