import React from "react";
import "./card-offer.scss";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";

const CardOffer = ({ order, title, desc, list }) => {
  return (
    <div id="card-offer" className="col-12 col-md-4">
      <span>{order}</span>
      <RevealTitle tag="h3" title={title} />
      <RevealText tag="p" text={desc} />
      <ul>
        {list.map((item) => (
          <li key={item} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardOffer;
