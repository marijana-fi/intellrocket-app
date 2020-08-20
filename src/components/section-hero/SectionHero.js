import React, { useEffect, useRef } from "react";
import Button from "../button/Button";
import "./section-hero.scss";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import RevealTitle from "../reveal-title/RevealTitle";

gsap.registerPlugin(MorphSVGPlugin);

const SectionHero = () => {
  const start = useRef(null);

  useEffect(() => {
    gsap.to(start.current, 5, {
      morphSVG: {
        shape: start.current,
        // type: "rotational",
        shapeIndex: 1,
      },
      repeat: -1,
      yoyo: true,
      delay: 0,
    });
  });

  return (
    <section id="section-hero" className="margin-b">
      <div className="container d-flex align-items-center">
        <div className="row align-items-center h-100">
          <div className="col-12 col-lg-6 ">
            <RevealTitle tag="h1" title="We Build Amazing Mobile and Web Experiences" />

            <div className="explore d-flex align-items-center btn-slide-in">
              <Button name="round" label="" />
              <span>Explore</span>
            </div>
          </div>
          <div className="col-lg-6 h-100">
            <div className="img-wrap">
              <svg id="Layer_4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1075.88 846.77">
                <defs></defs>
                <title>intellrocket Baze , Border</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <clipPath id="svg-clip">
                      <path
                        ref={start}
                        id="morph-path"
                        className="cls-1"
                        d=" M175.270836,26.7977911 C128.405836,70.3317911 129.938279,144.739124 96.4022789,213.687124 C64.6272789,279.016124 41.242383,286.071679 46.324383,355.582679 C48.314383,382.792679 79.5246278,459.251586 88.7738696,492.334164 C116.497714,591.496483 -75.3047466,680.552915 34.6072534,850.491915 C96.2982534,945.874915 281.559,906.015 400.971,924.052 C537.741,944.711 678.161685,902.348368 778.343685,870.462368 C902.466685,830.956368 927.354,806.232 975,704 C1066.208,508.3 1058.68971,185.848951 904.455709,55.3429506 C808.898709,-25.5130494 786.027661,117.60054 600.323661,90.5925401 C411.016661,63.0605401 256.879836,-49.0102089 175.270836,26.7977911 Z"
                      />
                    </clipPath>
                  </g>
                </g>
              </svg>
              <figure className="clip-svg">
                <img src="img/hero-image.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
