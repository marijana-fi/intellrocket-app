import React from "react";
import "./sitemap.scss";
import { sitemapPosts } from "./sitemapData";
import { sitemapPages } from "./sitemapData";

function SitemapPage() {
  return (
    <div id="sitemap" className="margin-b-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Sitemap</h1>
            <h2>Pages</h2>
            <ul className="map-list">
              {sitemapPages?.map((item) => (
                <li>
                  <a className="external underline" href={item.link}>
                    {item.heading}
                  </a>
                  {!!item.sub.length && (
                    <ul className="ml-4">
                      {item.sub.map((el) => (
                        <li>
                          <a className="external underline" href={el.link}>
                            {el.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <h2>Posts</h2>
            <ul className="map-list">
              {sitemapPosts.map((item, i) => (
                <li key={i}>
                  <a className="external underline" href="/intellrocket-app/blog/single">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h2>Job Openings</h2>
            <ul className="map-list">
              <li>
                <a className="external underline" href="/intellrocket-app/career/marketing-manager">
                  Marketing Manager
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SitemapPage;
