import React, { useState } from "react";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import { Waypoint } from "react-waypoint";

function ServiceListItem({ title = "", list, desc, image }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section id="section-list-item" className="col-12">
      <div className="row">
        <div className="col-12 col-md-6 margin-b">
          <Waypoint bottomOffset="150px" onEnter={() => setIsVisible(true)}>
            <img src={image} alt={title} className={isVisible ? "show" : "hidden"} />
          </Waypoint>
        </div>
        <div className="col-12 col-md-6  margin-b align-self-center">
          <div className="services-list-item ">
            <RevealTitle tag="h2" title={title} />
            <RevealText tag="p" text={desc} />
            <Waypoint onEnter={() => setIsVisible(true)}>
              <ul className={isVisible ? "text-slide-in" : "hidden"}>
                {list.map((item, i) => {
                  return <RevealText key={i} tag="li" text={item} />;
                })}
              </ul>
            </Waypoint>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceListItem;
