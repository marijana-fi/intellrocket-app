import React from "react";
import blogsData from "../blogsData";
import "./blog-intro.scss";
import RevealTitle from "../../utils/reveal-title/RevealTitle";

function BlogIntro() {
  return (
    <section id="section-blog-intro">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <RevealTitle tag="h1" title={blogsData[0].title} />
            <div className="intro-wrap d-flex ">
              <div className="author mr-3 mr-md-5">
                <RevealTitle tag="h5" title="Author:" />
                <RevealTitle tag="p" title={blogsData[0].author} />
              </div>
              <div className="time">
                <RevealTitle tag="h5" title="Published on:" />
                <RevealTitle tag="p" title={blogsData[0].published} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogIntro;
