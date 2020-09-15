import React, { useState } from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import planCardData from "./planCardData";
import PlanCard from "./PlanCard";
import LogoGrid from "../utils/logo-grid/LogoGrid";
import maintenanceLogoData from "./maintenanceLogoData";
import { Waypoint } from "react-waypoint";

function PickPlan() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section id="pick-plan" className="margin-b-100">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 col-md-8 m-auto">
            <RevealTitle tag="p" title="Which plan is right for you?" customClass="colorize-text" />
            <RevealTitle tag="h2" title="Pick your plan, based on what kind of support you need." />
          </div>
          {planCardData.map((item, i) => (
            <Waypoint bottomOffset="30%" onEnter={() => setIsVisible(true)} key={i}>
              <div className="col-12 col-lg-6">
                <PlanCard item={item} isVisible={isVisible} />
              </div>
            </Waypoint>
          ))}
        </div>
        <LogoGrid data={maintenanceLogoData} />
      </div>
    </section>
  );
}

export default PickPlan;
