import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import CtaNews from "../utils/cta-news/CtaNews";
import { navPagesData } from "./footerData";
import { footerContactData } from "./footerData";

const Footer = ({ isLight, path }) => {
  return (
    <footer>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <Link to="/intellrocket-app" className="logo">
              <img
                src={
                  !isLight
                    ? "/intellrocket-app/img/intellrocket-logo-white.png"
                    : "/intellrocket-app/img/intellrocket-logo.png"
                }
                alt="logo"
              />
            </Link>
            <ul className="footer-contact">
              <li>Company name: IntellRocket Inc.</li>
              <li>Address: 2035 Sunset Lake Rd, Suite B-2, Newark, 19702 DE, USA</li>
              <li>Phone: (415) 767-1800</li>
              <li> Email: office@intellrocket.com</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 mb-4 col-lg-2">
            <h4 className="mb-4">Pages</h4>
            <ul className="footer-list">
              {navPagesData.map((item, i) => (
                <li className="footer-list-item" key={i}>
                  <Link to={item.link} className={item.link === path ? "current" : "underline"}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-6 mb-4 col-lg-3">
            <h4 className="mb-4">Reach us</h4>
            <ul className="footer-list">
              {footerContactData.map((item, i) => (
                <li className="footer-list-item" key={i}>
                  <Link to={item.link} className={item.link === path ? "current" : "underline"}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-10 col-sm-6 col-md-5 col-lg-3">
            <h4 className="footer-item">Follow Us</h4>
            <ul className="social-list d-flex align-items-center">
              <li className="social-list-item">
                <a
                  href="https://www.facebook.com/IntellRocket/"
                  className="social-icon"
                  aria-label="Navigate to Facebook"
                >
                  <img
                    src={
                      isLight
                        ? "/intellrocket-app/img/social-fb-icon-dark.svg"
                        : "/intellrocket-app/img/social-fb-icon.svg"
                    }
                    alt="facebook"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://www.linkedin.com/company/intellrocket/"
                  className="social-icon"
                  aria-label="Navigate to Linkedin"
                >
                  <img
                    src={
                      isLight
                        ? "/intellrocket-app/img/social-linkedin-icon-dark.svg"
                        : "/intellrocket-app/img/social-linkedin-icon.svg"
                    }
                    alt="linkedin"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://twitter.com/intellrocket"
                  className="social-icon"
                  aria-label="Navigate to Twitter"
                >
                  <img
                    src={
                      isLight
                        ? "/intellrocket-app/img/social-twitter-icon-dark.svg"
                        : "/intellrocket-app/img/social-twitter-icon.svg"
                    }
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a
                  href="https://dribbble.com/intellrocket/"
                  className="social-icon"
                  aria-label="Navigate to Dribbble"
                >
                  <img
                    src={
                      isLight
                        ? "/intellrocket-app/img/social-dribbble-icon-dark.svg"
                        : "/intellrocket-app/img/social-dribbble-icon.svg"
                    }
                    alt="dribbble"
                  />
                </a>
              </li>
            </ul>
            <h4 className="footer-item"> Newsletter</h4>
            <CtaNews />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="copyright-wrap flex-column flex-md-row d-flex justify-content-between ">
                <div className="copyright-links">
                  <Link to="/intellrocket-app/privacy-policy" className="underline">
                    Privacy Policy
                  </Link>
                  <Link to="/intellrocket-app/site-map" className="underline">
                    Site map
                  </Link>
                </div>
                <h6>
                  ©2014 - 2020{" "}
                  <Link to="/intellrocket-app/" className="underline">
                    IntellRocket,{" "}
                  </Link>
                  All rights reserved
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
