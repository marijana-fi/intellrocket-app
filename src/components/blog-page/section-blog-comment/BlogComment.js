import React, { useState } from "react";
import Button from "../../button/Button";
import "./blog-comment.scss";

function BlogComment() {
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
    <section id="section-blog-comment">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h3>Leave a comment</h3>
            <form action="" className="form-wrap" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name*"
                required
                onChange={handleNameChange}
                value={name}
              />
              <input
                type="email"
                placeholder="Email*"
                required
                onChange={handleEmailChange}
                value={email}
              />
              <textarea name="" id="comment" cols="30" rows="8" placeholder="Comment"></textarea>

              <div className="submit margin-b-100">
                <p className="mb-4">Your email address will not be publicly visible.</p>
                <Button name="btn comment" label="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogComment;
