import React, { useState, useEffect } from "react";
import "./toggle-theme.scss";

function ToggleTheme({ toggleTheme, isLight }) {
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
    <button
      className={windowWidth <= 992 ? "theme-toggle-wrapper mobile" : "theme-toggle-wrapper"}
      aria-label="change theme"
    >
      <input type="checkbox" id="toggle" onChange={() => toggleTheme()} checked={!isLight} />
      <label className="theme-toggle" htmlFor="toggle">
        <div className="toggle"></div>
        <span>Dark</span>
        <span>Light</span>
      </label>
    </button>
  );
}

export default ToggleTheme;
