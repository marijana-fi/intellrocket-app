import React from "react";
import blogsData from "../blogsData";
import "./blog-desc.scss";
import { Link } from "react-router-dom";

function BlogDesc() {
  return (
    <section id="section-blog-desc" className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h6 className="section-info">{blogsData[0].desc}</h6>
            <h3>{blogsData[0].whatTitle}</h3>
            <div>
              {blogsData[0].whatText.map((item, i) => (
                <p key={i}>{item.text}</p>
              ))}
            </div>
            <h3>{blogsData[0].whyTitle}</h3>
            <div>
              <p>{blogsData[0].whyText}</p>
              <p>
                Research{" "}
                <a
                  className="external underline"
                  href="https://www.statista.com/statistics/232285/most-common-products-services-abandoned-digital-carts-internet-users/"
                >
                  from Statista{" "}
                </a>
                shows that:
              </p>
              <img
                src="/intellrocket-app/img/blog-graph-01.png"
                alt="graph showing reasons for eShop abandonment"
                className="mb-5"
              />
              <p>
                And these are just some of the many reasons why your customers might be walking
                away.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="search-wrap">
              <form>
                <label htmlFor="search"></label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  fill="#bdbdbd"
                >
                  <path d="M460.355 421.59l-106.51-106.512c20.04-27.553 31.884-61.437 31.884-98.037C385.73 124.935 310.792 50 218.685 50c-92.106 0-167.04 74.934-167.04 167.04 0 92.107 74.935 167.042 167.04 167.042 34.912 0 67.352-10.773 94.184-29.158L419.945 462l40.41-40.41zM100.63 217.04c0-65.095 52.96-118.055 118.056-118.055 65.098 0 118.057 52.96 118.057 118.056 0 65.097-52.96 118.057-118.057 118.057-65.096 0-118.055-52.96-118.055-118.056z"></path>
                </svg>
                <input type="search" id="search" placeholder="Search" />
              </form>

              <div className="categories">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <Link to="/intellrocket-app/blog/category/development">Development (3)</Link>
                  </li>
                  <li>
                    <Link to="/intellrocket-app/blog/category/ecommerce">eCommerce (4)</Link>
                  </li>
                  <li>
                    <Link to="/intellrocket-app/blog/category/web-design">Web Design (4)</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDesc;
