import React from "react";
import offerData from "../offerData";
import CardOffer from "./CardOffer";

function SectionOffer() {
	return (
		<section id="section-offer" className="padding-100">
			<div className="container">
				<div className="row">
					{offerData.map((data) => (
						<CardOffer
							key={data.number}
							title={data.title}
							desc={data.desc}
							order={data.number}
							list={data.list}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionOffer;
