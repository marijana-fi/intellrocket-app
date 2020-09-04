import React, { useState, useEffect } from "react";
import "./header.scss";
import Button from "../utils/button/Button";
import classnames from "classnames";
import ToggleTheme from "../utils/toggle-theme/ToggleTheme";
import { Link } from "react-router-dom";

const Header = ({ isLight, toggleTheme, isBlog }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
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

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? "mobile-open" : ""}>
      <div className="toggler">
        <ToggleTheme toggleTheme={toggleTheme} isLight={isLight} />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-sm-3">
            <Link to="/intellrocket-app" title="Go to Home Page" className="logo">
              <img
                src={
                  !isLight || isBlog
                    ? "/intellrocket-app/img/intellrocket-logo-white.png"
                    : "/intellrocket-app/img/intellrocket-logo.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-sm-8 d-flex align-items-center justify-content-end">
            <div
              className={classnames(
                "navigation",
                { "light-nav": isBlog },
                { "menu-open": isMenuOpen },
                { "mobile-overlay": windowWidth <= 992 }
              )}
            >
              <nav>
                <ul className={isMenuOpen ? "header-list open" : "header-list"}>
                  <li className="header-item">
                    <Link
                      to="/intellrocket-app"
                      onClick={isMenuOpen ? handleMenuOpen : null}
                      className={isMenuOpen ? "underline text-slide-in" : "underline"}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="header-item">
                    <Link
                      to="/intellrocket-app/about-us"
                      onClick={isMenuOpen ? handleMenuOpen : null}
                      className={isMenuOpen ? "underline text-slide-in" : "underline"}
                    >
                      About us
                    </Link>
                  </li>
                  <li className="header-item">
                    <Link
                      to="/intellrocket-app/services"
                      onClick={isMenuOpen ? handleMenuOpen : null}
                      className={isMenuOpen ? "underline text-slide-in" : "underline"}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="header-item">
                    <Link
                      to="/intellrocket-app/work"
                      onClick={isMenuOpen ? handleMenuOpen : null}
                      className={isMenuOpen ? "underline text-slide-in" : "underline"}
                    >
                      Work
                    </Link>
                  </li>
                  {windowWidth <= 992 ? (
                    <li className="header-item">
                      <Link
                        to="/intellrocket-app/get-a-quote"
                        onClick={isMenuOpen ? handleMenuOpen : null}
                        className={isMenuOpen ? "underline text-slide-in" : "underline"}
                      >
                        Get a Quote
                      </Link>
                    </li>
                  ) : (
                    <Link to="/intellrocket-app/get-a-quote">
                      <Button name="btn btn-static" label="Get a Quote" />
                    </Link>
                  )}
                </ul>
                <div className="social-items">
                  <a
                    href="https://www.linkedin.com/company/intellrocket/"
                    className="text-slide-in"
                  >
                    <span className="social-icon">
                      <img src="/intellrocket-app/img/social-fb-icon.svg" alt="" />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/intellrocket/"
                    className="text-slide-in"
                  >
                    <span className="social-icon">
                      <img src="/intellrocket-app/img/social-linkedin-icon.svg" alt="" />
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
