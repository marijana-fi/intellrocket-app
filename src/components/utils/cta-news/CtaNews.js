import React, { useState } from "react";
import Button from "../button/Button";
import "./cta-news.scss";

function CtaNews() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form action="" className="d-flex align-items-center" onSubmit={handleSubmit}>
      <div className="news-email input-wrapper">
        <input
          type="email"
          id="email-news"
          required
          placeholder=" "
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="email-news">Enter your email</label>
      </div>
      <Button name="round" />
    </form>
  );
}

export default CtaNews;
