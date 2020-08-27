import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProjectPage from "./components/project-page/ProjectPage";
import { Switch, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./components/blog-page/BlogPage";

function usePageViews() {
  const [path, setPath] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return path;
}

function App() {
  const path = usePageViews();
  const [isBlog, setIsBlog] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  var FontFaceObserver = require("fontfaceobserver");
  var font = new FontFaceObserver("Open Sans");

  font.load().then(function () {
    setIsLoaded(true);
  });

  useEffect(() => {
    const isLight = JSON.parse(localStorage.getItem("theme"));

    setIsLight(isLight);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isLight));
  }, [isLight]);

  useEffect(() => {
    if (path === "/intellrocket-app/blog") {
      setIsBlog(true);
    } else {
      setIsBlog(false);
    }
  }, [path]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      {isLoaded && (
        <div className={isLight ? "App" : "App dark"}>
          <ScrollToTop />
          <Header isLight={isLight} toggleTheme={toggleTheme} isBlog={isBlog} />
          <Switch>
            <Route exact path="/intellrocket-app">
              <Home />
            </Route>
            <Route exact path="/intellrocket-app/work">
              <ProjectPage />
            </Route>
            <Route exact path="/intellrocket-app/blog">
              <BlogPage />
            </Route>
          </Switch>
          <Footer isLight={isLight} />
        </div>
      )}
    </>
  );
}

export default App;
