import React, { useState } from "react";
import RevealTitle from "../../utils/reveal-title/RevealTitle";
import RevealText from "../../utils/reveal-text/RevealText";
import sliderWorkData from "../../home/data/sliderWorkData";
import "./work-list.scss";
import OpenImage from "../../utils/open-image/OpenImage";
import { Link } from "react-router-dom";

function WorkList() {
  const [isImgVisible, setIsImgVisible] = useState(false);
  // console.log(isImgVisible);

  return (
    <section id="work-list" className="margin-b">
      <div className="container ">
        <div className="row">
          <div className="col-12 col-md-8 text-wrap m-auto">
            <RevealTitle tag="h1" title="Projects" />
            <RevealText
              tag="p"
              text="Our clients appreciate the time and effort we invest in our designs. We strive to repay that trust with customized designs for each individual client. Here are our most notable projects:"
            />
          </div>

          {sliderWorkData.map((item, i) => {
            return (
              <div key={i} className="col-12 col-md-6 img-wrap ">
                <Link to="work/retyre">
                  <OpenImage
                    setIsImgVisible={setIsImgVisible}
                    isImgVisible={isImgVisible}
                    url={item.image}
                    customClass="right"
                    title={item.title}
                  />
                  {isImgVisible ? (
                    <>
                      <RevealTitle tag="h2" title={item.title} customClass="split-title" />
                      <RevealText tag="p" text={item.desc.join(", ")} />{" "}
                    </>
                  ) : null}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkList;
