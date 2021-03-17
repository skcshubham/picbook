// Remove Action on photos
export function removePost(index) {
	// actions are just JS objects
	return {
		type: "REMOVE_POST",
		index: index,
	};
}

// Adding post action
export function addPost(post) {
	return {
		type: "ADD_POST",
		post: post,
	};
}
