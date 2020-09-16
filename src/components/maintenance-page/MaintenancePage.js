import React from "react";
import HeroSection from "./HeroSection";
import "./maintenance.scss";
import PickPlan from "./PickPlan";
import SampleSection from "./SampleSection";
import { sampleData1, sampleData2 } from "./sampleData";
import SupportServices from "./support-services/SupportServices";
import WorkProcess from "./work-process/WorkProcess";
import Testimonials from "./testimonials/Testimonials";
import SupportFaq from "./support-faq/SupportFaq";
import ChoosePlan from "./choose-plan/ChoosePlan";
import supportData from "./support-services/supportData";

function MaintenancePage({ isLight }) {
  return (
    <div>
      <HeroSection />
      <PickPlan isLight={isLight} />
      <SampleSection data={sampleData1} id="sample-1" isLight={isLight} />
      <SampleSection data={sampleData2} id="sample-2" isLight={isLight} />
      <SupportServices
        isLight={isLight}
        box="true"
        data={supportData}
        title="Wordpress Support Services"
      />
      <WorkProcess />
      <Testimonials isLight={isLight} />
      <SupportFaq isLight={isLight} />
      <ChoosePlan />
    </div>
  );
}

export default MaintenancePage;
