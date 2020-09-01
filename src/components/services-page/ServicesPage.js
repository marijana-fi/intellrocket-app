import React from "react";
import SectionQuote from "../section-quote/SectionQuote";
import ServiceList from "./service-list/ServiceList";
import ServiceApproach from "./service-approach/ServiceApproach";
import SharedSectionHero from "../utils/shared-section-hero/SharedSectionHero";
import serviceHeroData from "./serviceHeroData";

function ServicesPage() {
  return (
    <div>
      <SharedSectionHero data={serviceHeroData} />
      <ServiceList />
      <ServiceApproach />
      <SectionQuote />
    </div>
  );
}

export default ServicesPage;
