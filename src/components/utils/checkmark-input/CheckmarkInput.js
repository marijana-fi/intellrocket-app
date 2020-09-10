import React from "react";
import "./check-mark-input.scss";
import { ErrorMessage } from "@hookform/error-message";
import { forwardRef } from "react";

const CheckmarkInput = forwardRef(({ contact, errors }, ref) => {
  return (
    <div className="privacy-wrap">
      {contact ? <p>Privacy Policy*</p> : null}
      <label htmlFor="radio">
        {contact ? (
          <span>
            I have read and agree with{" "}
            <a href="/" className="underline">
              privacy policy
            </a>
          </span>
        ) : (
          <span>
            By using this form you agree with the storage and handling of your data by this website.
            <span className="asterisk"> *</span>
          </span>
        )}
        <input ref={ref} type="checkbox" name="checkbox" id="radio" />
        {errors ? (
          <ErrorMessage
            errors={errors}
            name="checkbox"
            render={({ message }) => <small className="error-text">{message}</small>}
          />
        ) : null}
        <span className="check-mark"></span>
      </label>
    </div>
  );
});

export default CheckmarkInput;
