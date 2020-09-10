import React from "react";
import Button from "../button/Button";
import "./cta-news.scss";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function CtaNews() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form action="" className="d-flex align-items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="news-email input-wrapper">
        <input
          type="email"
          id="email-news"
          name="email"
          placeholder=" "
          errors={errors}
          ref={register({ required: "This field is required." })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <small className="error-text ">{message}</small>}
        />
        <label htmlFor="email-news">Enter your email</label>
      </div>
      <Button name="round" aria="subscribe to newsletter" />
    </form>
  );
}

export default CtaNews;
