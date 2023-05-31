//General
import axios         from "axios";
import galleryApiUrl from "./galleryApiUrl";

const uploadImageKitIo = async (image, userName, folderName) => {
	try {
		const res = await axios.get(`${galleryApiUrl}auth`);
		const uploadFile = await axios.postForm(
			"https://upload.imagekit.io/api/v1/files/upload",
			{
				file      : image,
				publicKey : "public_+w27ATwX2hA3h1tUKCNcdsQRx3A=",
				signature : res?.data?.signature,
				expire    : res?.data?.expire,
				token     : res?.data?.token,
				fileName  : image?.name,
				folder    : `${userName}/${folderName ? folderName : ""}`,
			}
		);
		return uploadFile;
	} catch (error) {
		return error;
	}
};

export default (uploadImageKitIo);
