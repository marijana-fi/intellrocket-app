import React, { forwardRef } from "react";
import RevealImage from "../../utils/reveal-image/RevealImage";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import Button from "../../utils/button/Button";
import "./bicycle-store.scss";

const BicycleStore = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="bicycle-store" className="margin-b-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <RevealImage src="/intellrocket-app/img/bicycle/bicycle-stores.png" />
          </div>
          <div className="col-12 col-lg-6">
            <RevealTitle tag="h2" title="Bicycle Stores" />
            <RevealText
              tag="p"
              text="With the increase of global warming and climate change awareness, bikes have become common to the urban environment. And so do online bicycle stores. The bike trend has entered the world of web development, bigstyle."
            />
            <RevealText
              tag="p"
              text="Do you want a simple ordering form for your bike online shop, or more of a full pack integrated DTC eCommerce platform? We can do both."
            />
            <Button name="btn" label="Get a Quote" animate="true" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default BicycleStore;
