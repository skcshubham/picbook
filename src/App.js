import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import UploadPhoto from "./components/UploadPhoto/UploadPhoto";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container">
				<Header />
				<UploadPhoto />
				<Photo />
			</div>
		</React.Fragment>
	);
}

export default App;
