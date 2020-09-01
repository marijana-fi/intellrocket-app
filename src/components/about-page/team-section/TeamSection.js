import React from "react";
import "./team-section.scss";
import RevealText from "../../utils/reveal-text/RevealText";
import RevealSingleLine from "../../utils/reveal-single-line/RevealSingleLine";
import Button from "../../utils/button/Button";

function TeamSection() {
  return (
    <section id="about-team" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="circle-wrap">
              <div className="circle-inner circle"></div>
              <div className="circle-middle circle"></div>
              <div className="circle-outer circle"></div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="text-wrap">
              <RevealText tag="h5" text="meet the team" />
              <RevealSingleLine tag="h3" text="who we are" />
              <RevealText
                tag="p"
                text="IntellRocket is an innovative company in the
fields of web development and web design.
We’re based in Belgrade, Serbia but our work is
international. Our creative and ambitious team
speaks the universal language of technology."
              />
            </div>
            <Button name="btn" label="Join The Team" animate="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
