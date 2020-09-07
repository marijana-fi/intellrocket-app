import React from "react";
import careerCultureData from "./careerCultureData";
import InfoCard from "../utils/info-card/InfoCard";

function CareerCulture() {
  return (
    <section id="career-culture" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-wrap">
              <h2>Our culture</h2>
              <p>
                At IntellRocket, we strive to create a pleasant and professional atmosphere where
                all the members of our team can have fun and do their jobs to the best of their
                abilities. We try to create a culture with values that help our company grow.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {careerCultureData.map((item, i) => (
            <InfoCard item={item} key={i} customClass="card-culture" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerCulture;
