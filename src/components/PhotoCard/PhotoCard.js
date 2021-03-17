import React from "react";
import "./PhotoCard.css";

class PhotoCard extends React.Component {
	render() {
		return (
			<React.Fragment>
				{this.props.posts
					.sort(function (x, y) {
						// Sorting based on recently added pic
						return y.id - x.id;
					})
					.map((post, index) => {
						return (
							<div key={post.id} className="card col mb-5">
								<img
									src={post.imageLink}
									className="card-img-top"
									alt={post.desciption}
								/>
								<div className="card-body">
									<h5 className="card-title">{post.description}</h5>
									<button
										onClick={() => this.props.removePost(index)}
										type="button"
										className="PhotoCard-btn btn btn-outline-danger"
									>
										Delete
									</button>
									<button
										type="button"
										className="PhotoCard-btn btn btn-outline-info"
									>
										Comments
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
