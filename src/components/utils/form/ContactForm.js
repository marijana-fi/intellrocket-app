import React, { useState } from "react";
import Button from "../button/Button";
import "./contact-form.scss";
import CheckmarkInput from "../checkmark-input/CheckmarkInput";

function ContactForm({ btnLabel, message, text }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form action="" className="form-wrap" onSubmit={handleSubmit}>
      <div className="name-wrapper align-items-stretch input-wrapper">
        <input
          type="text"
          id="name"
          placeholder=" "
          required
          onChange={handleNameChange}
          value={name}
        />
        <label htmlFor="name">Name*</label>
      </div>
      {/* <InputField type="text" label="Name*" id="name" customClass="name-wrap" isRequired /> */}
      <div className="email-wrap input-wrapper">
        <input
          type="email"
          id="email"
          placeholder=" "
          required
          onChange={handleEmailChange}
          value={email}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="comment-wrap input-wrapper">
        <textarea name="" id="comment" cols="30" rows="8" placeholder=" "></textarea>
        <label htmlFor="comment">{text}</label>
      </div>

      <div className="submit margin-b-100 d-flex justify-content-between">
        {message === "privacy" ? (
          <CheckmarkInput contact="true" />
        ) : (
          <p className="mb-4">Your email address will not be publicly visible.</p>
        )}

        <Button name="btn comment btn-static" label={btnLabel} />
      </div>
    </form>
  );
}

export default ContactForm;
