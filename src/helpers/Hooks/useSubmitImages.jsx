import { apiImageKit } from "store/api/imageKitApi";
import axios           from "axios";

const { useGenerateSignMutation } = apiImageKit;

const useSubmitImages = ({userName, folderName}) => {
	const timestamp = Math.floor(Date.now() / 1000);
	const [ generateSignMutation ] = useGenerateSignMutation();
	const [ generateUrlCompress ] = apiImageKit.useGenerateUrlCompressMutation();
	const handlerUploadImage = async (image, isditedPhoto) => {
		try {
			const { data } = await generateSignMutation({data : {
				timestamp : timestamp,
				folder    : `${userName}/${folderName ? folderName : isditedPhoto ? "_editedPhotos" : ""}`,
			}});
			const uploadFile = await axios.postForm(
				"https://api.cloudinary.com/v1_1/dxvi7hk47/image/upload",
				{
					file      : image,
					publicId  : "test",
					api_key   : "864322584227584",
					signature : data.signature,
					folder    : `${userName}/${folderName ? folderName : isditedPhoto ? "_editedPhotos" : ""}`,
					timestamp : `${data.timestamp}`,
				}
			);

			if (!uploadFile?.data) return;

			const urlThumnail = await generateUrlCompress({data : {
				public_id : uploadFile?.data?.public_id,
				format    : uploadFile?.data?.format,
			}});

			const urlPageSize = await generateUrlCompress({data : {
				public_id : uploadFile?.data?.public_id,
				format    : uploadFile?.data?.format,
				width     : "1920",
				quality   : "30",
			}});

			const dataResp = {
				...uploadFile.data,
				url          : urlPageSize.data?.url,
				urlThumbnail : urlThumnail.data?.url,
			};
			return dataResp;
		} catch (error) {
			throw new Error(error);
		}
	};

	return {handlerUploadImage};
};

export default useSubmitImages;
