import React from "react";
import RevealSingleLine from "../../utils/reveal-single-line/RevealSingleLine";
import RevealText from "../../utils/reveal-text/RevealText";
import "./about-clients.scss";
import testimonialData from "./testimonialData";
import TestimonialCard from "./TestimonialCard";
import LogoGrid from "../../utils/logo-grid/LogoGrid";
import aboutClientLogoData from "./aboutClientLogoData";

function AboutClients({ isLight }) {
  return (
    <section id="about-clients" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <RevealSingleLine tag="h3" text="Our Clients" />
            <RevealText
              tag="p"
              text="We’ve worked with some of the brightest Silicon Valley start-ups, as well as a range of established European businesses. We let our portfolio sing our praises for us."
            />
          </div>

          {testimonialData.map((item, i) => (
            <TestimonialCard item={item} key={i} />
          ))}
        </div>
        <LogoGrid isLight={isLight} data={aboutClientLogoData} />
      </div>
    </section>
  );
}

export default AboutClients;
