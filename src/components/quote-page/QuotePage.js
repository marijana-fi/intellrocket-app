import React from "react";
import "./quote-page.scss";
import ProjectDetailsForm from "./project-details-form/ProjectDetailsForm";
function QuotePage() {
  return (
    <main id="quote-page" className="margin-b-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="text-wrap">
              <h1>We create digital solutions that help your business grow online.</h1>
              <p>
                Share your vision with us and we will make it come true. Get in touch to get a free
                estimate of your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailsForm />
    </main>
  );
}

export default QuotePage;
