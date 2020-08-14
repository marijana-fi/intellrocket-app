import React, { useState } from "react";
import "./section-digital.scss";
import { Waypoint } from "react-waypoint";
import OpenImage from "../open-image/OpenImage";

const SectionDigital = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section id="section-digital" className="margin-b">
      <div className="container ">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-10 col-lg-5 d-flex align-items-center ">
            <div className="text-wrap">
              <h2>We Deliver Breathtaking Digital Products</h2>
              <p>
                We are a creative tech company that develops user journeys and provide a memorable
                user experience. We create enduring relationships between brands and their clients.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="img-wrap d-flex justify-content-end">
              <div className="img-large d-flex">
                <OpenImage url="/img/section-digital-img-01.jpg" customClass="right" />
              </div>

              <div className="img-small">
                <OpenImage url="/img/section-digital-img-02.jpg" customClass="right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDigital;
