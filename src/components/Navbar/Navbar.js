import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand" href="/">
						<i className="fas fa-camera pr-2"></i>
						PICBOOK
					</a>
					<div className="d-flex">
						<p className="mt-2">built by Shubham</p>
						<a
							className="mt-2 pl-2"
							href="https://www.linkedin.com/in/skcshubham"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin fa-lg"></i>
						</a>
						<a
							className="mt-2 pl-2"
							href="https://github.com/skcshubham"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github fa-lg"></i>
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
