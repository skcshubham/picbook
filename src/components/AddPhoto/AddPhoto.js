import React from "react";
import "./AddPhoto.css";

class AddPhoto extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="AddPhoto-container">
					<input
						className="form-control mb-3"
						type="text"
						placeholder="URL of image"
					/>
					<input
						className="form-control mb-3"
						type="text"
						placeholder="Description of image"
					/>
					<button
						className="AddPhoto-button btn btn-outline-success"
						type="submit"
					>
						Add to Picbook
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default AddPhoto;
