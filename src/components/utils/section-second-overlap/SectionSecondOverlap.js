import React from "react";
import "./section-second-overlap.scss";
import OpenImage from "../open-image/OpenImage";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";

const SectionSecondOverlap = ({ data }) => {
  return (
    <section id="section-second" className="margin-b">
      <div className="container ">
        <div className="row justify-content-between flex-lg-row flex-column-reverse">
          <div className="col-12 col-lg-5 d-flex align-items-center ">
            <div className="text-wrap">
              {data.heading ? <h5 className="heading">{data.heading}</h5> : null}
              <RevealTitle tag="h2" title={data.title} />
              <RevealText tag="p" text={data.desc} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="img-wrap d-flex justify-content-end">
              <div className="img-large d-flex">
                <OpenImage
                  url="/intellrocket-app/img/section-digital-img-01.jpg"
                  customClass="right"
                />
              </div>

              <div className="img-small">
                <OpenImage
                  url="/intellrocket-app/img/section-digital-img-02.jpg"
                  customClass="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSecondOverlap;
