import React from "react";
import serviceData from "../serviceData";
import ServiceListItem from "./ServiceListItem";
import "./service-list.scss";

function ServiceList() {
  return (
    <section id="service-list">
      <div className="container">
        <div className="row">
          {serviceData.services.map((item, i) => (
            <ServiceListItem
              key={i}
              title={item.title}
              desc={item.desc}
              list={item.items}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceList;
