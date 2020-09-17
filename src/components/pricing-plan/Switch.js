import React from "react";
import "./plan-switch.scss";

function Switch({ handleToggle }) {
  return (
    <label className="switch">
      <input type="checkbox" onChange={handleToggle} />
      <span className="sliding"></span>
    </label>
  );
}

export default Switch;
