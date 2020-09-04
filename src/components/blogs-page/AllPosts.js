import React, { useState, useEffect } from "react";
import "./all-posts.scss";
import RevealSingleLine from "../utils/reveal-single-line/RevealSingleLine";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";
import Button from "../utils/button/Button";
import SinglePost from "./SinglePost";

gsap.registerPlugin(SplitText);

function AllPosts() {
  const [blogsData, setBlogsData] = useState([]);
  const [slicedBlogsData, setSlicedBlogsData] = useState([]);
  const [splitTitle, setSplitTitle] = useState(null);
  const [limit, setLimit] = useState(5);
  const [postsAmount, setPostsAmount] = useState(null);

  useEffect(() => {
    const url = "https://intellrocket.com/wp-json/wp/v2/posts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);

  useEffect(() => {
    const amount = blogsData.length;
    setPostsAmount(amount);
    const sliced = blogsData.slice(0, limit);
    setSlicedBlogsData(sliced);
  }, [blogsData, limit]);

  useEffect(() => {
    setTimeout(() => {
      let split = new SplitText(".post-title", {
        type: "lines",
        linesClass: "split-title",
      });
      setSplitTitle(split);
    }, 700);
  }, []);

  const handleLoadMore = (params) => {
    setLimit((prevLimit) => (limit === postsAmount ? limit : prevLimit + 5));
  };

  return (
    <section id="all-posts" className="margin-b-100">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-5">
            <RevealSingleLine tag="h2" text="All posts" />
          </div>
        </div>
        {slicedBlogsData?.map((item, i) => (
          <Link to="/intellrocket-app/blog/single" key={i}>
            <SinglePost item={item} data={blogsData} i={i} />
          </Link>
        ))}
      </div>
      <div className="row justify-content-center">
        <Button name="btn" label="Load More" animate="true" handleClick={handleLoadMore} />
      </div>
    </section>
  );
}

export default AllPosts;
