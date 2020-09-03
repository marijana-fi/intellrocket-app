import React, { useState, useEffect } from "react";
import "./all-posts.scss";

function AllPosts() {
  const [blogsData, setBlogsData] = useState([]);
  const [markup, setMarkup] = useState([]);

  useEffect(() => {
    const url = "https://intellrocket.com/wp-json/wp/v2/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);

  useEffect(() => {
    let blogs = blogsData?.map((item) => {
      return item.excerpt.rendered;
    });
    setMarkup(blogs);
  }, [blogsData]);

  const innerHtml = markup.map((item) => {
    return { __html: item };
  });

  return (
    <section id="all-posts">
      <div className="container">
        <div className="row align-items-center">
          {blogsData?.map((item, i) => (
            <>
              <div className="col-12 col-lg-6 mb-5">
                <img src={item.image[0].featured_img_src} alt="" />
              </div>
              <div className="col-12 col-lg-5 mb-5">
                <div className="info-wrap">
                  <h3 className="post-title underline">{item.title.rendered}</h3>
                  <div className="d-flex align-items-center mb-2">
                    <span className="date-line"></span>
                    <span className="date">{item.date.slice(0, 10)}</span>
                  </div>
                  <div className="post-intro" dangerouslySetInnerHTML={innerHtml[i]}></div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllPosts;
