import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Photo from "./components/Photo/Photo";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<Photo />
			</div>
		</React.Fragment>
	);
}

export default App;
