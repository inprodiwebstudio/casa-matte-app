import { apiImageKit } from "store/api/imageKitApi";
import axios           from "axios";

const { useGenerateSignMutation } = apiImageKit;

import { heicToPng } from "helpers";

// const imageToJpeg = async (image) => {
// 	const blob = await image.arrayBuffer();
// 	const buffer = Buffer.from(blob);
// 	return buffer;
// };

const useSubmitImages = ({userName, folderName}) => {
	// const timestamp = Math.floor(Date.now() / 1000);
	const [ generateSignMutation ] = useGenerateSignMutation();
	const [ generateUrlCompress ] = apiImageKit.useGenerateUrlCompressMutation();
	const handlerUploadImage = async (image, isditedPhoto) => {
		try {
			const constructorImage = await heicToPng(image);

			const { data } = await generateSignMutation({data : {
				// timestamp : timestamp,
				folder           : `${userName}/${folderName ? folderName : isditedPhoto ? "_editedPhotos" : ""}`,
				lastModifiedDate : constructorImage?.lastModifiedDate,
			}});
			const uploadFile = await axios.postForm(
				"https://api.cloudinary.com/v1_1/dtjvmtfji/image/upload",
				{
					file      : constructorImage,
					publicId  : "test",
					api_key   : "265817136216333",
					signature : data?.signature,
					folder    : `${userName}/${folderName ? folderName : isditedPhoto ? "_editedPhotos" : ""}`,
					timestamp : `${data?.timestamp}`,
					context   : `dateCaptured=${data?.lastModifiedDate}`,
				}
			);

			if (!uploadFile?.data) {
				throw new Error("Error al subir la imagen");
			}

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

			if (urlThumnail?.data?.url && urlPageSize?.data?.url) {
				return {
					...uploadFile.data,
					url          : urlPageSize?.data?.url,
					urlThumbnail : urlThumnail?.data?.url,
				};
			}

			if (urlThumnail?.error || urlPageSize?.error) {
				return {};
			}
		} catch (error) {
			throw new Error(error);
		}
	};

	return {handlerUploadImage};
};

export default useSubmitImages;
