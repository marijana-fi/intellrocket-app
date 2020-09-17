import React, { useState, forwardRef } from "react";
import RevealTitle from "../utils/reveal-title/RevealTitle";
import planCardData from "./planCardData";
import PlanCard from "./PlanCard";
import LogoGrid from "../utils/logo-grid/LogoGrid";
import maintenanceLogoData from "./maintenanceLogoData";
import { Waypoint } from "react-waypoint";

const PickPlan = forwardRef(({ isLight }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section ref={ref} id="pick-plan" className="margin-b-100 pt-5">
      <div className="container">
        <div className="row text-center plan-card-wrap">
          <div className="col-12 col-md-8 m-auto">
            <RevealTitle tag="p" title="Which plan is right for you?" customClass="colorize-text" />
            <RevealTitle tag="h2" title="Pick your plan, based on what kind of support you need." />
          </div>
          {planCardData.map((item, i) => (
            <Waypoint bottomOffset="30%" onEnter={() => setIsVisible(true)} key={i}>
              <div className="col-12 col-lg-6 mb-4 card-padding">
                <PlanCard item={item} isVisible={isVisible} />
              </div>
            </Waypoint>
          ))}
        </div>
        <LogoGrid isLight={isLight} data={maintenanceLogoData} />
      </div>
    </section>
  );
});

export default PickPlan;
