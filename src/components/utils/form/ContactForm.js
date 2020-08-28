import React, { useState } from "react";
import Button from "../button/Button";
import "./contact-form.scss";

function ContactForm({ btnLabel, message, text }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const privacy = () => {
    return (
      <div className="privacy-wrap">
        <p>Privacy Policy*</p>
        <label htmlFor="radio">
          <span>
            I have read and agree with{" "}
            <a href="" className="underline">
              privacy policy
            </a>
          </span>
          <input type="radio" id="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form action="" className="form-wrap" onSubmit={handleSubmit}>
      <div className="name-wrap">
        {" "}
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
      <div className="email-wrap">
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
      <div className="comment-wrap">
        <textarea name="" id="comment" cols="30" rows="8" placeholder=" "></textarea>
        <label htmlFor="comment">{text}</label>
      </div>

      <div className="submit margin-b-100 d-flex justify-content-between">
        {message === "privacy" ? (
          privacy()
        ) : (
          <p className="mb-4">Your email address will not be publicly visible.</p>
        )}

        <Button name="btn comment" label={btnLabel} />
      </div>
    </form>
  );
}

export default ContactForm;
