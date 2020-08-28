import React from "react";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealTitle from "../../utils/reveal-title/RevealTitle";

function ServiceListItem({ title, list, desc, image }) {
  return (
    <section id="section-list-item">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-5">
            <img src={image} alt="" />
          </div>
          <div className="col-12 col-md-6 mb-5">
            <RevealTitle tag="h2" title={title} />
            <RevealText tag="p" text={desc} />
            <ul>
              {list.map((item, i) => {
                return <RevealText tag="li" text={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceListItem;
