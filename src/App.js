import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProjectPage from "./components/project-page/ProjectPage";

function App() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const isLight = JSON.parse(localStorage.getItem("theme"));

    setIsLight(isLight);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isLight));
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={isLight ? "App" : "App dark"}>
      <Header isLight={isLight} toggleTheme={toggleTheme} />
      <Home />
      {/* <ProjectPage /> */}
      <Footer isLight={isLight} />
    </div>
  );
}

export default App;
