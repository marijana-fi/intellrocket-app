import React from "react";
import ChoosePlan from "../maintenance-page/choose-plan/ChoosePlan";
import Testimonials from "../maintenance-page/testimonials/Testimonials";
import SupportFaq from "../maintenance-page/support-faq/SupportFaq";
import SampleSection from "../maintenance-page/SampleSection";
import { sampleData2 } from "../maintenance-page/sampleData";
import SupportServices from "../maintenance-page/support-services/SupportServices";
import sampleServicesData from "./sampleServicesData";
import PricingPlanHero from "./PricingPlanHero";
import "./pricing-plan.scss";

function PricingPlan({ isLight }) {
  return (
    <div>
      <PricingPlanHero />
      <SampleSection isLight={isLight} data={sampleData2} />
      <SupportServices
        isLight={isLight}
        data={sampleServicesData}
        title="Lorem ipsum dolor sit amet"
      />
      <Testimonials />
      <SupportFaq isLight={isLight} />
      <ChoosePlan />
    </div>
  );
}

export default PricingPlan;
