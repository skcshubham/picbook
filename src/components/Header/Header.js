import React from "react";
import "./Header.css";

class Header extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4">Hello, there! :)</h1>
				<p className="lead">This is the picture book webapp.</p>
				<p>
					This webapp lets everyone to add and remove pictures from their
					picturebook. Everyone can also add comments on each image globally.
				</p>
			</div>
		);
	}
}

export default Header;
