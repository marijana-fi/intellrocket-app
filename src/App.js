import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProjectPage from "./components/project-page/ProjectPage";
import { Switch, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import ContactPage from "./components/contact-page/ContactPage";
import ServicesPage from "./components/services-page/ServicesPage";
import WorkPage from "./components/work-page/WorkPage";
import AboutPage from "./components/about-page/AboutPage";
import SingleBlogPage from "./components/single-blog-page/SingleBlogPage";
import BlogsPage from "./components/blogs-page/BlogsPage";
import QuotePage from "./components/quote-page/QuotePage";
import CareerPage from "./components/career-page/CareerPage";
import JobPage from "./components/job-page/JobPage";

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
    if (path === "/intellrocket-app/blog" || path === "/intellrocket-app/blog/single") {
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
            <Route exact path="/intellrocket-app/work/retyre">
              <ProjectPage />
            </Route>
            <Route exact path="/intellrocket-app/blog/single">
              <SingleBlogPage />
            </Route>
            <Route exact path="/intellrocket-app/about-us">
              <AboutPage isLight={isLight} />
            </Route>
            <Route exact path="/intellrocket-app/services">
              <ServicesPage />
            </Route>
            <Route exact path="/intellrocket-app/work">
              <WorkPage isLight={isLight} />
            </Route>
            <Route exact path="/intellrocket-app/blog">
              <BlogsPage />
            </Route>
            <Route exact path="/intellrocket-app/contact">
              <ContactPage />
            </Route>
            <Route exact path="/intellrocket-app/get-a-quote">
              <QuotePage />
            </Route>
            <Route exact path="/intellrocket-app/careers">
              <CareerPage />
            </Route>
            <Route exact path="/intellrocket-app/careers/marketing-manager">
              <JobPage />
            </Route>
          </Switch>
          <Footer isLight={isLight} />
        </div>
      )}
    </>
  );
}

export default App;
