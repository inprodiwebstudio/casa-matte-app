import axios from "axios";

export const deleteImageKitIo = async (files) => {
	try {
		await axios.post(
			"http://localhost:3001/delete",
			{
				imageIds : files,
			}
		);
	} catch (error) {
		console.log("error");
	}
};
