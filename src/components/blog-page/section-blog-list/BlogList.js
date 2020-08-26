import React from "react";
import blogsData from "../blogsData";
import "./blog-list.scss";
import { Link } from "react-router-dom";

function BlogList() {
  return (
    <section id="section-blog-list">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h3>{blogsData[0].listTitle}</h3>
          </div>
          <div className="col-12 col-md-8">
            <ul>
              {blogsData[0].ways.map((item, i) => (
                <li key={i}>
                  <h3>{item.title}</h3>
                  {item.text.map((el, i) => (
                    <p key={i} className="mb-4">
                      {el.info}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <div className="link d-inline-flex">
              <Link
                to="/intellrocket-app/blog/customer-loyalty-5-tips-to-gain-more-repeat-customers/"
                className="d-inline-flex external underline mb-4"
              >
                Learn how to gain more repeat customers!
              </Link>
            </div>
            <div className="link d-inline-flex">
              <Link
                to="/intellrocket-app/blog/customer-loyalty-5-tips-to-gain-more-repeat-customers/"
                className="external underline mb-4"
              >
                5 essential tips for creating a successful eCommerce store.
              </Link>
            </div>
            <div className="advice-wrap mb-5">
              <h3>
                Yet, if you want to do it for yourself here are some advices, you should follow:
              </h3>
              <ol className="pl-4">
                {blogsData[0].adviceList.map((item, i) => (
                  <li key={i}>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
