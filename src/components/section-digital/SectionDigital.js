import React from "react";
import "./section-digital.scss";

function SectionDigital() {
	return (
		<section id="section-digital" className="padding-100">
			<div className="container ">
				<div className="row justify-content-between flex-lg-row flex-column-reverse">
					<div className="col-10 col-lg-5 d-flex align-items-center ">
						<div className="text-wrap">
							<h2>We Deliver Breathtaking Digital Products</h2>
							<p>
								We are a creative tech company that develops
								user journeys and provide a memorable user
								experience. We create enduring relationships
								between brands and their clients.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="img-wrap d-flex justify-content-end">
							<div className="img-large d-flex">
								<img
									src="/img/section-digital-img-01.jpg"
									alt=""
								/>
							</div>
							<div className="img-small">
								<img
									src="/img/section-digital-img-02.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionDigital;
