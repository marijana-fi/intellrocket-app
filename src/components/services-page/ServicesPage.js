import React from "react";
import SectionQuote from "../section-quote/SectionQuote";

import ServiceHero from "./service-hero/ServiceHero";
import ServiceList from "./service-list/ServiceList";
import ServiceApproach from "./service-approach/ServiceApproach";

function ServicesPage() {
  return (
    <div>
      <ServiceHero />
      <ServiceList />
      <ServiceApproach />
      <SectionQuote />
    </div>
  );
}

export default ServicesPage;
