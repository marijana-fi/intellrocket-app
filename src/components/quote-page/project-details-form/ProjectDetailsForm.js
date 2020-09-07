import React from "react";
import "./project-details-form.scss";
import InputField from "./InputField";
import Button from "../../utils/button/Button";
import ProjectTopic from "../project-topic/ProjectTopic";

function ProjectDetailsForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="project-details">
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <ProjectTopic />
          <div className="row align-items-center margin-b-100">
            <div className="col-12 col-md-4">
              <h2>Project Details</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-8">
              <div className="details-wrap">
                <InputField
                  type="text"
                  id="name"
                  isRequired
                  label="Your name*"
                  customClass="name-wrap"
                />
                <InputField
                  type="email"
                  id="email"
                  isRequired
                  label="Email*"
                  customClass="email-wrap"
                />
                <InputField type="tel" id="phone" label="Phone" customClass="phone-wrap" />
                <InputField type="text" id="company" label="Company" customClass="company-wrap" />
                <InputField
                  type="text"
                  id="website"
                  label="URL of website"
                  customClass="website-wrap"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center margin-b-100">
            <div className="col-12 col-md-4">
              <h2>Budget</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-8 input-wrapper">
              <div className="budget-wrap">
                <input type="text" placeholder="Your budget (€)" />
              </div>
            </div>
          </div>
          <div className="row align-items-center margin-b-100">
            <div className="col-12 col-md-4">
              <h2>Tell us about your project?</h2>
            </div>
            <div className="col-12 col-md-8 col-lg-8 input-wrapper">
              <div className="comment-wrap">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="A site similar to Netflix, where users will be able to watch the latest ... Monthly payment depending on the package that is chosen ... We would like for the site to be live in four mounts."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <Button name="btn btn-static width-150" label="Submit" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ProjectDetailsForm;
