import React from "react";
import "./UploadPhoto.css";

class UploadPhoto extends React.Component {
	render() {
		return (
			<div className="UploadPhoto">
				<button type="button" className="btn btn-outline-info">
					<i className="fas fa-plus-square mr-2 fa-lg"></i>Add a new picture
				</button>
			</div>
		);
	}
}

export default UploadPhoto;
