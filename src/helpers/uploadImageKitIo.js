import axios from "axios";

//Own functions
// const publicKey = import.meta.env.IMAGEKIT_PUBLIC_KEY;

// const instance = axios.create({
// 	baseURL : "https://upload.imagekit.io/api/v1/files/upload",
// 	headers : {"Content-Type" : "multipart/form-data"},
// });

const uploadImageKitIo = async (image) => {
	try {
		const res = await axios.get("http://localhost:3001/auth");
		const uploadFile = await axios.postForm(
			"https://upload.imagekit.io/api/v1/files/upload",
			{
				file      : image,
				publicKey : "public_+w27ATwX2hA3h1tUKCNcdsQRx3A=",
				signature : res?.data?.signature,
				expire    : res?.data?.expire,
				token     : res?.data?.token,
				fileName  : "cmtImage.jpg",
			}
		);
		return uploadFile;
	} catch (error) {
		return error;
	}

	// const requestAndResponse = instance.postForm(pathUrl, data)
	// 	.then(resp => resp)
	// 	.catch(err => err);

	// return requestAndResponse;
};

export default (uploadImageKitIo);
