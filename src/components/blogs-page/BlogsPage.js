import React from "react";
import SectionSlider from "../section-slider/SectionSlider";
import sliderBlogData from "../home/data/sliderBlogData";
import "./blogs-page.scss";
import AllPosts from "./AllPosts";
import BlogCta from "../single-blog-page/section-blog-cta/BlogCta";

function BlogsPage() {
  return (
    <>
      <div className="blogs-hero margin-b-100">
        <h1>Welcome to our blog!</h1>
      </div>
      <SectionSlider title="Recommended posts" data={sliderBlogData} path="blog/single" />
      <AllPosts />
      <BlogCta />
    </>
  );
}

export default BlogsPage;
