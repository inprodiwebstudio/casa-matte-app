import axios             from "axios";
import { galleryApiUrl } from "helpers";

export const deleteImageKitIo = async (files) => {
	try {
		await axios.post(
			`${galleryApiUrl}delete`,
			{
				imageIds : files,
			}
		);
	} catch (error) {
		console.error("error");
	}
};
