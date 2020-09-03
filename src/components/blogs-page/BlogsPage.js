import React from "react";
import SectionSlider from "../section-slider/SectionSlider";
import sliderBlogData from "../home/data/sliderBlogData";
import "./blogs-page.scss";
import AllPosts from "./AllPosts";

function BlogsPage() {
  return (
    <>
      <div className="blogs-hero margin-b-100">
        <h1>Welcome to our blog!</h1>
      </div>
      <SectionSlider title="Recommended posts" data={sliderBlogData} />
      <AllPosts />
    </>
  );
}

export default BlogsPage;
