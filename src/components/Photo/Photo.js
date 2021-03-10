import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./Photo.css";

const posts = [
	{
		id: "0",
		description: "Random Landscapes",
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
	{
		id: "3",
		description: "Earth is awesome!",
		imageLink:
			"https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
	{
		id: "4",
		description: "Occupy Mars",
		imageLink:
			"https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
	{
		id: "5",
		description: "Mystic Moon",
		imageLink:
			"https://images.pexels.com/photos/3567673/pexels-photo-3567673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
];

class Photo extends React.Component {
	render() {
		return (
			<div className="container Photo">
				<div className="row row-cols-md-3 row-cols-1">
					<PhotoCard photoData={posts} />
				</div>
			</div>
		);
	}
}

export default Photo;
