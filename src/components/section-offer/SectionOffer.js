import React from "react";
import offerData from "../../data/offerData";
import CardOffer from "./CardOffer";

const SectionOffer = () => {
  return (
    <section id="section-offer" className="margin-b">
      <div className="container">
        <div className="row">
          {offerData.map((data, i) => (
            <CardOffer
              key={data.number}
              title={data.title}
              desc={data.desc}
              order={data.number}
              list={data.list}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionOffer;
