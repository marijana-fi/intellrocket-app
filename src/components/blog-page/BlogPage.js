import React from "react";
import SectionSlider from "../section-slider/SectionSlider";
import sliderBlogData from "../home/data/sliderBlogData";
import BlogIntro from "./section-blog-intro/BlogIntro";
import BlogDesc from "./section-blog-desc/BlogDesc";
import BlogList from "./section-blog-list/BlogList";
import BlogCta from "./section-blog-cta/BlogCta";
import BlogComment from "./section-blog-comment/BlogComment";

function BlogPage() {
  return (
    <>
      <BlogIntro />
      <BlogDesc />
      <BlogList />
      <SectionSlider
        title="You May Also Like"
        data={sliderBlogData}
        toFilter="5 Proven ways to reduce cart abandonment and make your customers purchase."
      />
      <BlogCta />
      <BlogComment />
    </>
  );
}

export default BlogPage;
