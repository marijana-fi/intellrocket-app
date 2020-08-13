import React from "react";
import Header from "./components/header/Header";
import SectionHero from "./components/section-hero/SectionHero";
import SectionDigital from "./components/section-digital/SectionDigital";
import SectionOffer from "./components/section-offer/SectionOffer";
import SectionWork from "./components/section-work/SectionWork";

function App() {
	return (
		<div className="App">
			<Header />
			<SectionHero />
			<SectionDigital />
			<SectionOffer />
			<SectionWork />
		</div>
	);
}

export default App;
