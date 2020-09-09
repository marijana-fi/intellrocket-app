import React from "react";
import Button from "../../utils/button/Button";
import "./section-services.scss";
import OpenImage from "../../utils/open-image/OpenImage";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import { Link } from "react-router-dom";

const SectionServices = () => {
  return (
    <section id="section-services" className="margin-b">
      <div className="container">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-10 col-lg-5 pb-3 d-flex align-items-center ">
            <div className="text-wrap">
              <RevealTitle tag="h2" title="We Deliver Amazing Products" />
              <RevealText
                tag="p"
                text="We know that only by working with you as partners we can understand your business
                and find a perfect digital solution for you."
              />
              <Link to="/intellrocket-app/services">
                <Button name="btn" label="Our Services" animate="true" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="img-wrap">
              <OpenImage url="/intellrocket-app/img/section-services.jpg" customClass="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
