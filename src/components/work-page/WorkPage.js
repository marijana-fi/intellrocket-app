import React from "react";
import SectionQuote from "../section-quote/SectionQuote";
import ClientsList from "./clients-list/ClientsList";

import WorkList from "./work-list/WorkList";

function WorkPage({ isLight }) {
  return (
    <div>
      <WorkList />
      <ClientsList isLight={isLight} />
      <SectionQuote />
    </div>
  );
}

export default WorkPage;
