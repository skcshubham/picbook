import posts from "../data/posts";

// default parameter to set the state as posts as we launch our app
const postReducer = function post(state = posts, action) {
	return state;
};

export default postReducer;
