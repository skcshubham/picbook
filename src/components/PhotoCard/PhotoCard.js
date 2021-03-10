import React from "react";
import "./PhotoCard.css";

class PhotoCard extends React.Component {
	render() {
		return (
			<React.Fragment>
				{this.props.photoData.map((post) => {
					return (
						<div key={post.id} className="card col mb-5">
							<img
								src={post.imageLink}
								className="card-img-top"
								alt={post.desciption}
							/>
							<div className="card-body">
								<h5 className="card-title">{post.description}</h5>
								<button type="button" class="btn btn-outline-danger">
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	}
}

export default PhotoCard;
