import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import AddPhoto from "../AddPhoto/AddPhoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import Header from "../Header/Header";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import "./Photo.css";

class Photo extends React.Component {
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
									<PhotoCard {...this.props} />
								</div>
							</React.Fragment>
						);
					}}
				/>
				<Route
					path="/AddPhoto"
					render={({ history }) => {
						return <AddPhoto {...this.props} onHistory={history} />;
					}}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

// Connecting Photo component to redux store
function mapStateToProps(state) {
	return {
		posts: state,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
