import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";

function SinglePost({ item, i, data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [markup, setMarkup] = useState([]);

  useEffect(() => {
    let blogs = data?.map((item) => {
      return item.excerpt.rendered;
    });
    setMarkup(blogs);
  }, [data]);

  const innerHtml = markup.map((item) => {
    return { __html: item };
  });

  return (
    <Waypoint bottomOffset="200px" onEnter={() => setIsVisible(true)}>
      <div
        className={
          isVisible
            ? "row align-items-center post-wrap mb-5 animate"
            : "row align-items-center post-wrap mb-5"
        }
      >
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <img src={item.image[0].featured_img_src} alt="" />
        </div>
        <div className="col-12 col-lg-5 ">
          <div className="info-wrap">
            <h3 className="post-title">{item.title.rendered}</h3>
            <div className="d-flex align-items-center mb-2">
              <span className="date-line"></span>
              <span className="date">{item.date.slice(0, 10)}</span>
            </div>
            <div className="post-intro" dangerouslySetInnerHTML={innerHtml[i]}></div>
          </div>
        </div>
      </div>
    </Waypoint>
  );
}

export default SinglePost;
