import { getParamURL } from "helpers";

const isValidPath = (path) => {
	const userId = getParamURL("userId");
	const postId = getParamURL("postId");

	if ( userId && postId ) {
		return true;
	}
	return false;
};


export default isValidPath;
