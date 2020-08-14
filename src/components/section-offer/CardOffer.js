import React from "react";
import "./card-offer.scss";

const CardOffer = ({ order, title, desc, list }) => {
  return (
    <div id="card-offer" className="col-12 col-md-4">
      <span>{order}</span>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
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
