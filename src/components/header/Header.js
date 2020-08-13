import React, { useState, useEffect } from "react";
import "./header.scss";
import Button from "../button/Button";

function Header() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const handleMenuOpen = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-6 col-sm-3">
						<a href="/" title="Go to Home Page" className="logo">
							<img src="/img/intellrocket-logo.png" alt="" />
						</a>
					</div>
					<div className="col-6 col-sm-9 d-flex align-items-center justify-content-end">
						<div
							id={
								windowWidth <= 992
									? "mobile-overlay"
									: "navigation"
							}
							className={isMenuOpen ? "menu-open" : ""}
						>
							<nav>
								<ul
									className={
										isMenuOpen
											? "header-list open"
											: "header-list"
									}
								>
									<li className="header-item">
										<a href="/home" className="underline">
											Home
										</a>
									</li>
									<li className="header-item">
										<a
											href="/about-us"
											className="underline"
										>
											About us
										</a>
									</li>
									<li className="header-item">
										<a
											href="/services"
											className="underline"
										>
											Services
										</a>
									</li>
									<li className="header-item">
										<a href="/work" className="underline">
											Work
										</a>
									</li>
									{windowWidth <= 992 ? (
										<li className="header-item">
											<a
												href="/work"
												className="underline"
											>
												Get a Quote
											</a>
										</li>
									) : (
										<Button
											name="btn"
											label="Get a Quote"
										/>
									)}
								</ul>
								<div className="social-items">
									<a href="#" className="social-icon"></a>
									<a href="#" className="social-icon"></a>
								</div>
							</nav>
						</div>
						<button
							className={isMenuOpen ? "menu active" : "menu"}
							onClick={handleMenuOpen}
							aria-label="Open Menu"
						>
							<span className="text">Menu</span>
							<div className="hamburger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
