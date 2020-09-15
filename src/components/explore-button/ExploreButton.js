import React from "react";
import Button from "../utils/button/Button";

function ExploreButton({ handleScroll }) {
  return (
    <div className="explore d-flex align-items-center btn-slide-in">
      <Button name="round" label="" handleClick={handleScroll} aria="explore" />
      <span>Explore</span>
    </div>
  );
}

export default ExploreButton;
