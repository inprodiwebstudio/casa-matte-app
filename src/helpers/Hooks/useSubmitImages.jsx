import { apiImageKit } from "store/api/imageKitApi";
import axios           from "axios";

const { useGenerateSignMutation } = apiImageKit;

const useSubmitImages = ({userName, folderName}) => {
	const timestamp = Math.floor(Date.now() / 1000);
	const [ generateSignMutation ] = useGenerateSignMutation();
	const [ generateUrlCompress ] = apiImageKit.useGenerateUrlCompressMutation();
	const handlerUploadImage = async (image) => {
		try {
			const { data } = await generateSignMutation({data : {
				timestamp : timestamp,
				folder    : `${userName}/${folderName ? folderName : ""}`,
			}});
			const uploadFile = await axios.postForm(
				"https://api.cloudinary.com/v1_1/dxvi7hk47/image/upload",
				{
					file      : image,
					publicId  : "test",
					api_key   : "864322584227584",
					signature : data.signature,
					folder    : `${userName}/${folderName ? folderName : ""}`,
					timestamp : `${data.timestamp}`,
				}
			);
			const urlImage = await generateUrlCompress({data : {
				public_id : uploadFile?.data?.public_id,
				format    : uploadFile?.data?.format,
			}});
			const dataResp = {
				...uploadFile.data,
				url : urlImage.data?.url,
			};
			return dataResp;
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	return {handlerUploadImage};
};

export default useSubmitImages;
