import React from "react";
import Button from "../button/Button";
import "./contact-form.scss";
import CheckmarkInput from "../checkmark-input/CheckmarkInput";
import { useForm } from "react-hook-form";
import InputField from "../../quote-page/project-details-form/InputField";

function ContactForm({ btnLabel, message, text }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      action=""
      className={Object.keys(errors).length === 0 ? "form-wrap" : "form-wrap error"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        type="text"
        id="contact-name"
        customClass="name-wrap"
        name="name"
        errors={errors}
        label="Name*"
        ref={register({ required: "This field is required." })}
      />
      <InputField
        type="email"
        name="email"
        customClass="email-wrap"
        id="contact-email"
        errors={errors}
        label="Email*"
        ref={register({ required: "This field is required." })}
      />
      <InputField
        // type="text"
        name="message"
        textarea="true"
        customClass="comment-wrap"
        rows="8"
        id="comment"
        errors={errors}
        label={text}
        ref={register({ required: "This field is required." })}
      />

      <div className="submit margin-b-100 d-flex justify-content-between">
        {message === "privacy" ? (
          <CheckmarkInput
            contact="true"
            errors={errors}
            ref={register({ required: "This field is required." })}
          />
        ) : (
          <p className="mb-4">Your email address will not be publicly visible.</p>
        )}

        <Button name="btn comment btn-static" label={btnLabel} />
      </div>
    </form>
  );
}

export default ContactForm;
