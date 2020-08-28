import React, { useState } from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import CtaNews from "../../utils/cta-news/CtaNews";
import { Waypoint } from "react-waypoint";
import "./blog-cta.scss";

function BlogCta() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="section-blog-cta" className="margin-b-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 d-flex flex-column align-items-center">
            <RevealTitle tag="h2" title="Let's stay in touch" />
            <Waypoint onEnter={() => setIsVisible(true)}>
              <div className={isVisible ? "blog-cta btn-slide-in" : "blog-cta"}>
                <CtaNews />
              </div>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogCta;
