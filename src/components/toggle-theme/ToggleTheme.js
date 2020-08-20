import React, { useState, useEffect } from "react";
import "./toggle-theme.scss";

function ToggleTheme({ toggleTheme }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <button className={windowWidth <= 992 ? "theme-toggle-wrapper mobile" : "theme-toggle-wrapper"}>
      <input type="checkbox" id="checkbox" onChange={() => toggleTheme()} />
      <label className="theme-toggle" htmlFor="checkbox">
        <div className="toggle"></div>
        <span>Dark</span>
        <span>Light</span>
      </label>
    </button>
  );
}

export default ToggleTheme;
