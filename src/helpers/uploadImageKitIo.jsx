//General
import axios from "axios";

import { apiImageKit } from "store/api/imageKitApi";

const uploadImageKitIo = async (image, userName, folderName) => {
	try {
		const timestamp = Math.floor(Date.now() / 1000);
		const [ generateSignMutation ] = apiImageKit.useGenerateSignMutation();
		const [ generateUrlCompress ] = apiImageKit.useGenerateUrlCompressMutation();
		const respSign = await generateSignMutation({data : {
			timestamp : timestamp,
			folder    : `${userName}/${folderName ? folderName : ""}`,
		}});
		const uploadFile = await axios.postForm(
			"https://api.cloudinary.com/v1/dxvi7hk47/image/upload",
			{
				file      : image,
				publicId  : "test",
				api_key   : "864322584227584",
				signature : respSign,
				folder    : `${userName}/${folderName ? folderName : ""}`,
				timestamp : `${timestamp}`,
			}
		);
		const myUrlCompress = await generateUrlCompress({data : {
			public_id : uploadFile?.data?.public_id,
			format    : uploadFile?.data?.format,
		}});
		const dataResp = {
			...uploadFile,
			url : myUrlCompress,
		};
		return dataResp;
	} catch (error) {
		return error;
	}
};

export default (uploadImageKitIo);
