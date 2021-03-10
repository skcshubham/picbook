import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<Header />
			</div>
		</React.Fragment>
	);
}

export default App;
