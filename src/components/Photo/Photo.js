import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./Photo.css";

class Photo extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [
				{
					id: "0",
					description: "Landscape",
					imageLink:
						"https://images.pexels.com/photos/1447092/pexels-photo-1447092.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
				},
				{
					id: "1",
					description: "Buildings",
					imageLink:
						"https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				},
				{
					id: "2",
					description: "Universe",
					imageLink:
						"https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
				},
			],
		};
		this.removePhoto = this.removePhoto.bind(this);
	}

	removePhoto(photoRemoved) {
		console.log(photoRemoved.description);
		this.setState((state) => ({
			posts: state.posts.filter((post) => post !== photoRemoved),
		}));
	}

	render() {
		return (
			<div className="container Photo">
				<div className="row row-cols-md-3 row-cols-1">
					<PhotoCard
						photoData={this.state.posts}
						removePhoto={this.removePhoto}
					/>
				</div>
			</div>
		);
	}
}

export default Photo;
