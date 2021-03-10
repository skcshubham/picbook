import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="random.com">
						<i className="fas fa-camera pr-2"></i>
						PICBOOK
					</a>
					<div className="d-flex">
						<p className="mt-2">built by Shubham Kumar</p>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
