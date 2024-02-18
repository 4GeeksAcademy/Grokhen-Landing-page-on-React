import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Header from "./header";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="container d-grid gap-3">
			<NavBar />
			<Header />
			<Card />	
			<Footer />	
		</div>
	);
};

export default Home;
