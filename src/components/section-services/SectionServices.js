import React from "react";
import Button from "../button/Button";
import "./section-services.scss";

function SectionServices() {
	return (
		<section id="section-services" className="padding-100">
			<div className="container">
				<div className="row justify-content-between flex-lg-row flex-column-reverse">
					<div className="col-10 col-lg-5 d-flex align-items-center ">
						<div className="text-wrap">
							<h2>We Deliver Amazing Products</h2>
							<p>
								We know that only by working with you as
								partners we can understand your business and
								find a perfect digital solution for you.
							</p>
							<Button name="btn" label="Our Services" />
						</div>
					</div>
					<div className="col-12 col-lg-6 mb-5 mb-lg-0">
						<div className="img-wrap">
							<img src="img/section-services.jpg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionServices;
