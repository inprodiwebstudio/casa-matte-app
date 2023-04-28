import axios from "axios";

//Own functions
import { apiUrl } from "helpers";

const postRequestResponse = (pathUrl, data, token) => {
	const instance = axios.create({
		baseURL : apiUrl,
		headers : {"authorization" : `Bearer ${token}`},
	});

	const requestAndResponse = instance.postForm(pathUrl, data)
		.then(resp => resp)
		.catch(err => err);

	return requestAndResponse;
};

export default (postRequestResponse);
