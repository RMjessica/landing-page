import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";



const App = () => {
	return (
		<>
				<Navbar 
					title="Start Bootstrap"
					home="Home"
					about="About"
					services="Services"
					contact="Contact"/>

				<Jumbotron />

				<div className="container row row-cols-auto d-flex justify-content-between p-0">
					<Card />
					<Card />
					<Card />
					<Card />	
				</div>

				<Footer />
		</>
	);
};

export default App;