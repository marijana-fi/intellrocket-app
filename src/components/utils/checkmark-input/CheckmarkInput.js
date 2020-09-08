import React from "react";
import "./check-mark-input.scss";

const CheckmarkInput = ({ contact }) => {
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
        <input type="checkbox" id="radio" required />
        <span className="check-mark"></span>
      </label>
    </div>
  );
};

export default CheckmarkInput;
