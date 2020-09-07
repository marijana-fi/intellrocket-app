import React from "react";
import InputField from "../../quote-page/project-details-form/InputField";
import "./job-form.scss";

function JobForm() {
  return (
    <div className="col-12 col-md-5">
      <div id="job-form-wrap">
        <h2>Apply for this position</h2>
        <form action="">
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="name">
              Full Name <span>*</span>
            </label>
            <input type="tel" name="" id="name" />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input type="tel" name="" id="email" />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="phone">
              Phone <span>*</span>
            </label>
            <input type="tel" name="" id="phone" />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="phone">
              Cover Letter <span>*</span>
            </label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="input-wrapper label-visible mb-4">
            <span className="icon"></span>
            <label htmlFor="file">
              Upload CV/Resume <span>*</span>
            </label>
            <input type="file" name="" id="file" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;
