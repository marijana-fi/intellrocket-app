import React, { useState } from "react";
import "./job-form.scss";
import CheckmarkInput from "../../utils/checkmark-input/CheckmarkInput";
import Button from "../../utils/button/Button";

function JobForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="col-12 col-lg-5">
      <div id="job-form-wrap">
        <h2>Apply for this position</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="name">
              Full Name <span className="asterisk">*</span>
            </label>
            <input
              type="tel"
              name=""
              id="name"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="email">
              Email <span className="asterisk">*</span>
            </label>
            <input type="tel" name="" id="email" required />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="phone">
              Phone <span className="asterisk">*</span>
            </label>
            <input type="tel" name="" id="phone" required />
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="phone">
              Cover Letter <span className="asterisk">*</span>
            </label>
            <textarea name="" id="" cols="30" rows="5" required></textarea>
          </div>
          <div className="input-wrapper label-visible mb-4">
            <label htmlFor="app-file" className="upload">
              <span className="icon"></span>
              Upload CV/Resume <span className="asterisk">*</span>
            </label>
            <input type="file" name="" id="app-file" accept=".pdf, .doc, .docx" required />
            <small>Allowed Type(s): .pdf, .doc, .docx</small>
          </div>
          <CheckmarkInput />
          <Button name="btn btn-static" label="Submit" />
        </form>
      </div>
    </div>
  );
}

export default JobForm;
