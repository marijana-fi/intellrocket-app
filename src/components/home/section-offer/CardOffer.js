import React from "react";
import "./card-offer.scss";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealListItem from "../../utils/reveal-list-item/RevealListItem";

const CardOffer = ({ order, title, desc, list, index }) => {
  return (
    <div id="card-offer" className="col-12 col-md-4">
      <RevealTitle tag="span" title={order} customClass="colorize-text" />
      <RevealTitle tag="h3" title={title} />
      <RevealText tag="p" text={desc} />
      <RevealListItem tag="ul" text={list} index={index} />
    </div>
  );
};

export default CardOffer;
