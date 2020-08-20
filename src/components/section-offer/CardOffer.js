import React from "react";
import "./card-offer.scss";
import RevealTitle from "../reveal-title/RevealTitle";
import RevealText from "../reveal-text/RevealText";
import RevealListItem from "../reveal-list-item/RevealListItem";

const CardOffer = ({ order, title, desc, list, index }) => {
  return (
    <div id="card-offer" className="col-12 col-md-4">
      <span>{order}</span>
      <RevealTitle tag="h3" title={title} />
      <RevealText tag="p" text={desc} />
      <RevealListItem tag="ul" text={list} index={index} />
    </div>
  );
};

export default CardOffer;
