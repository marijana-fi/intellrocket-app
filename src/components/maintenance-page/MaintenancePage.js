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

function MaintenancePage({ isLight }) {
  return (
    <div>
      <HeroSection />
      <PickPlan isLight={isLight} />
      <SampleSection data={sampleData1} id="sample-1" />
      <SampleSection data={sampleData2} id="sample-2" />
      <SupportServices />
      <WorkProcess />
      <Testimonials />
      <SupportFaq />
    </div>
  );
}

export default MaintenancePage;
