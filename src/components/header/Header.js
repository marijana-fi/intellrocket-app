import React, { useState, useEffect } from "react";
import "./header.scss";
import Button from "../utils/button/Button";
import classnames from "classnames";
import ToggleTheme from "../utils/toggle-theme/ToggleTheme";
import { Link } from "react-router-dom";
import useDocumentScrollThrottled from "../utils/useDocumentScrollThrottled";
import { navPagesData } from "../footer/footerData";

const Header = ({ isLight, toggleTheme, isBlog, path }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  const MINIMUM_SCROLL = 0;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShouldShowShadow(currentScrollTop > 2);
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const hiddenStyle = shouldHideHeader ? "hidden" : "";
  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const openMenu = isMenuOpen && windowWidth <= 992 ? "mobile-open" : "";
  const slideNav = isMenuOpen ? "" : "";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 992) {
      setIsMobile(true);
    }
  }, [windowWidth]);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "scroll";
  }, [isMenuOpen]);

  return (
    <header className={`${openMenu} ${hiddenStyle} ${shadowStyle}`}>
      <div className="toggler">
        <ToggleTheme toggleTheme={toggleTheme} isLight={isLight} />
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-sm-3">
            <Link to="/intellrocket-app" title="Go to Home Page" className="logo">
              <img
                src={
                  !isLight || (isBlog && !shouldShowShadow)
                    ? "/intellrocket-app/img/intellrocket-logo-white.png"
                    : "/intellrocket-app/img/intellrocket-logo.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-sm-8 nav-mobile d-flex align-items-center justify-content-end">
            <div
              className={classnames(
                "navigation",
                { "light-nav": isBlog },
                { "menu-open": isMenuOpen },
                { "mobile-overlay": windowWidth <= 992 }
              )}
            >
              <nav>
                <ul className="header-list">
                  {navPagesData.map((item, i) => (
                    <li className="header-item" key={i}>
                      <Link
                        to={item.link}
                        onClick={isMenuOpen ? handleMenuOpen : null}
                        className={
                          item.link === path ? `current ${slideNav}` : `underline ${slideNav}`
                        }
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                  {windowWidth <= 992 ? (
                    <li className="header-item">
                      <Link
                        to="/intellrocket-app/get-a-quote"
                        onClick={isMenuOpen ? handleMenuOpen : null}
                        className={`underline ${slideNav}`}
                      >
                        Get a Quote
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/intellrocket-app/get-a-quote">
                        <Button name="btn btn-static" label="Get a Quote" />
                      </Link>
                    </li>
                  )}
                </ul>
                <div className="social-items">
                  <a href="https://www.linkedin.com/company/intellrocket/" className={slideNav}>
                    <span className="social-icon">
                      <img src="/intellrocket-app/img/social-fb-icon.svg" alt="go to facebook" />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/company/intellrocket/" className={slideNav}>
                    <span className="social-icon">
                      <img
                        src="/intellrocket-app/img/social-linkedin-icon.svg"
                        alt="go to linkedin"
                      />
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <button
              className={isMenuOpen ? "menu active" : "menu"}
              onClick={handleMenuOpen}
              aria-label="Open Menu"
            >
              <span className="text">Menu</span>
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
