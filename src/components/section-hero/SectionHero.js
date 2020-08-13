import React from "react";
import Button from "../button/Button";
import "./section-hero.scss";

function SectionHero() {
	return (
		<section id="section-hero">
			<div className="container d-flex align-items-center">
				<div className="row ">
					<div className="col-12 col-lg-6">
						<h1>We Build Amazing Mobile and Web Experiences</h1>
						<div className="explore d-flex align-items-center">
							<Button name="round" label="" />
							<span>Explore</span>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="img-wrap">
							<img src="img/hero-image.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionHero;
