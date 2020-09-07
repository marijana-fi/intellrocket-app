import React from "react";
import responsibilitiesData from "./responsibilitiesData";
import "./job-page.scss";
import requirementsData from "./requirementsData";
import jobData from "./jobData";
import JobForm from "./job-form/JobForm";

function JobPage() {
  return (
    <section id="job-page" className="margin-b">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <h1 className="job-title">{jobData.jobTitle}</h1>
            <h5 className="job-location">Job Location: Belgrade Job Type: Full Time</h5>
            <h3>Job brief</h3>
            <p className="brief">{jobData.jobBrief}</p>
            <h4 className="job-desc-title">{jobData.jobDescTitle}</h4>
            <p className="job-desc">{jobData.jobDesc}</p>
            <h3>Responsibilities</h3>
            <ul>
              {responsibilitiesData.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <h3>Requirements</h3>
            <ul>
              {requirementsData.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <JobForm />
        </div>
      </div>
    </section>
  );
}

export default JobPage;
