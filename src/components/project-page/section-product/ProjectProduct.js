import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import projectsData from "../projectsData";
import RevealImage from "../../utils/reveal-image/RevealImage";

function ProjectProduct() {
  return (
    <section id="section-project-product" className="margin-b-100">
      <div className="container">
        {projectsData[0].product.map((item, i) => (
          <div className="row" key={i}>
            <div className="col-12 col-lg-8 mb-4 mb-lg-5">
              <RevealTitle tag="h2" title={item.title} />
              <RevealText tag="p" text={item.text} />
            </div>
            <div className="col-12 product-img margin-b-100">
              <RevealImage src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-12 pt-lg-5">
            <RevealImage
              src="/intellrocket-app/img/projects/retyre-contact-about.png"
              alt="contact, about page design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectProduct;
