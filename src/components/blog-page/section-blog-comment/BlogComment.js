import React from "react";
import ContactForm from "../../utils/form/ContactForm";
function BlogComment() {
  return (
    <section id="section-blog-comment">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <h3>Leave a comment</h3>
            <ContactForm btnLabel="Submit" text="Comment" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogComment;
