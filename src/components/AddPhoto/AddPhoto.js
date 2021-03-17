import React from "react";
import "./AddPhoto.css";

class AddPhoto extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		const imageLink = event.target.elements.link.value;
		const description = event.target.elements.description.value;
		const post = {
			id: Number(new Date()),
			description: description,
			imageLink: imageLink,
		};
		if (imageLink && description) {
			this.props.addPost(post);
			this.props.onHistory.push("/");
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="AddPhoto-container">
					<form onSubmit={this.handleSubmit}>
						<input
							className="form-control mb-3"
							type="text"
							placeholder="URL of image"
							name="link"
						/>
						<input
							className="form-control mb-3"
							type="text"
							placeholder="Description of image"
							name="description"
						/>
						<button
							className="AddPhoto-button btn btn-outline-success"
							type="submit"
						>
							Add to Picbook
						</button>
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default AddPhoto;
