//General
import axios from "axios";

import { apiImageKit } from "store/api/imageKitApi";

const uploadImageKitIo = async (image, userName, folderName) => {
	try {
		const timestamp = Math.floor(Date.now() / 1000);
		const [ generateSignMutation ] = apiImageKit.useGenerateSignMutation();
		const respSign = await generateSignMutation({data : {
			timestamp : timestamp,
			folder    : `${userName}/${folderName ? folderName : ""}`,
		}});
		const uploadFile = await axios.postForm(
			"https://api.cloudinary.com/v1_1/dxvi7hk47/image/upload",
			{
				file      : image,
				publicId  : "test",
				api_key   : "864322584227584",
				signature : respSign,
				folder    : `${userName}/${folderName ? folderName : ""}`,
				timestamp : `${timestamp}`,
			}
		);
		return uploadFile;
	} catch (error) {
		return error;
	}
};

export default (uploadImageKitIo);
