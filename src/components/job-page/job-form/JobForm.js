import React, { useState } from "react";
import "./job-form.scss";
import CheckmarkInput from "../../utils/checkmark-input/CheckmarkInput";
import Button from "../../utils/button/Button";
import { useForm } from "react-hook-form";
import JobInputField from "./JobInputField";

function JobForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="col-12 col-lg-5">
      <div id="job-form-wrap">
        <h2>Apply for this position</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <JobInputField
            type="text"
            id="job-name"
            label="Full name"
            name="name"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />
          <JobInputField
            type="email"
            id="job-email"
            label="Email"
            name="email"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />
          <JobInputField
            type="tel"
            id="job-phone"
            label="Phone"
            name="phone"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />
          <JobInputField
            type="text"
            id="job-cover"
            label="Cover Letter"
            name="cover"
            textarea="true"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />
          <JobInputField
            type="file"
            customClass="upload"
            id="job-file"
            label=" Upload CV/Resume"
            name="upload"
            file="true"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />

          <CheckmarkInput errors={errors} ref={register({ required: "This field is required." })} />
          <Button name="btn btn-static" label="Submit" />
        </form>
      </div>
    </div>
  );
}

export default JobForm;
