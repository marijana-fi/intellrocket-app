import React from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import LogoGrid from "../../utils/logo-grid/LogoGrid";
import RevealSingleLine from "../../utils/reveal-single-line/RevealSingleLine";
import "./clients-list.scss";

function ClientsList({ isLight }) {
  return (
    <section id="clients-list" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <RevealSingleLine tag="h3" text="Trusted by clients" />

            <LogoGrid isLight={isLight} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsList;
