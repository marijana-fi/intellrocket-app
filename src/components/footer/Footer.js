import React, { useState } from "react";
import "./footer.scss";
import Button from "../button/Button";

const Footer = ({ isLight }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-lg-4 mb-5">
            <a href="/" className="logo">
              <img
                src={!isLight ? "/img/intellrocket-logo-white.png" : "/img/intellrocket-logo.png"}
                alt="logo"
              />
            </a>
            <ul className="footer-contact">
              <li>Company name: IntellRocket Inc.</li>
              <li>Address: 2035 Sunset Lake Rd, Suite B-2, Newark, 19702 DE, USA</li>
              <li>Phone: (415) 767-1800</li>
              <li> Email: office@intellrocket.com</li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 mb-5 col-lg-2">
            <h4>Pages</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="/home" className="underline">
                  Home
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/about-us" className="underline">
                  About us
                </a>
              </li>

              <li className="footer-list-item">
                <a href="/services" className="underline">
                  Services
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/work" className="underline">
                  Work
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-6 mb-5 col-lg-3">
            <h4>Reach us</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="/contact" className="underline">
                  Contact us
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/careers" className="underline">
                  Careers
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/blog" className="underline">
                  Blog
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-10 col-sm-6 col-md-5 col-lg-3">
            <h4 className="footer-item">Follow Us</h4>
            <ul className="social-list d-flex align-items-center">
              <li className="social-list-item">
                <a href="/" className="social-icon" aria-label="Navigate to Facebook">
                  <img
                    src={isLight ? "img/social-fb-icon-dark.svg" : "img/social-fb-icon.svg"}
                    alt="facebook"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a href="/" className="social-icon" aria-label="Navigate to Linkedin">
                  <img
                    src={
                      isLight ? "img/social-linkedin-icon-dark.svg" : "img/social-linkedin-icon.svg"
                    }
                    alt="linkedin"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a href="/" className="social-icon" aria-label="Navigate to Twitter">
                  <img
                    src={
                      isLight ? "img/social-twitter-icon-dark.svg" : "img/social-twitter-icon.svg"
                    }
                    alt="twitter"
                  />
                </a>
              </li>
              <li className="social-list-item">
                <a href="/" className="social-icon" aria-label="Navigate to Dribbble">
                  <img
                    src={
                      isLight ? "img/social-dribbble-icon-dark.svg" : "img/social-dribbble-icon.svg"
                    }
                    alt="dribbble"
                  />
                </a>
              </li>
            </ul>
            <h4 className="footer-item"> Newsletter</h4>
            <div>
              <form action="" className="d-flex justify-content-between" onSubmit={handleSubmit}>
                <div className="footer-email">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder=" "
                    onChange={handleChange}
                    value={email}
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
                <Button name="round" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <div className="copyright-wrap flex-column flex-md-row d-flex justify-content-between ">
                <div className="copyright-links">
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>
                  <a href="/map" className="underline">
                    Site map
                  </a>
                </div>
                <h6>
                  ©2014 - 2020{" "}
                  <a href="/" className="underline">
                    IntellRocket,{" "}
                  </a>
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
