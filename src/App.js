import React from "react";
import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionDigital from "./components/section-digital/SectionDigital";
import SectionOffer from "./components/section-offer/SectionOffer";
import SectionServices from "./components/section-services/SectionServices";
import SectionSlider from "./components/section-slider/SectionSlider";
import sliderBlogData from "./data/sliderBlogData";
import sliderWorkData from "./data/sliderWorkData";
import SectionQuote from "./components/section-quote/SectionQuote";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<SectionHero />
			<SectionDigital />
			<SectionOffer />
			<SectionSlider title="Our Works" data={sliderWorkData} />
			<SectionServices />
			<SectionSlider title="Our Blog" data={sliderBlogData} />
			<SectionQuote />
			<Footer />
		</div>
	);
}

export default App;
