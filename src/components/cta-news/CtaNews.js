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
    <form action="" className="d-flex justify-content-between" onSubmit={handleSubmit}>
      <div className="news-email">
        <input
          type="email"
          id="email"
          required
          placeholder=" "
          onChange={handleChange}
          value={email}
        />
        <label htmlFor="email">Enter your email</label>
      </div>
      <Button name="round" />
    </form>
  );
}

export default CtaNews;
