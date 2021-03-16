import React from "react";
import { Link } from "react-router-dom";
import "./UploadPhoto.css";

class UploadPhoto extends React.Component {
	render() {
		return (
			<div className="UploadPhoto">
				<Link className="btn UploadPhoto-button" to="/AddPhoto">
					<h5>
						<i className="fas fa-plus-square fa-lg"></i>Add Pictures
					</h5>
				</Link>
			</div>
		);
	}
}

export default UploadPhoto;
