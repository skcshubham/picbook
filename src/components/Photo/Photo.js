import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import AddPhoto from "../AddPhoto/AddPhoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import Header from "../Header/Header";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Photo.css";

class Photo extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.removePhoto = this.removePhoto.bind(this);
	}

	addPhoto(addedPost) {
		this.setState((state) => ({
			posts: state.posts.concat([addedPost]),
		}));
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
				<Route
					exact
					path="/"
					render={() => {
						return (
							<React.Fragment>
								<Header />
								<UploadPhoto />
								<div className="row row-cols-md-3 row-cols-1">
									<PhotoCard
										photoData={this.props.posts}
										removePhoto={this.removePhoto}
									/>
								</div>
							</React.Fragment>
						);
					}}
				/>
				<Route
					path="/AddPhoto"
					render={({ history }) => {
						return (
							<AddPhoto
								onAddPhoto={(addedPost) => {
									this.addPhoto(addedPost);
									// clicking submit brings back to home page
									history.push("/");
								}}
							/>
						);
					}}
				/>
			</div>
		);
	}
}

// Connecting Photo component to redux store
function mapStateToProps(state) {
	return {
		posts: state,
	};
}

export default connect(mapStateToProps)(Photo);
