/* eslint-disable import/no-extraneous-dependencies */
import heic2any from "heic2any";
const heicToPng = async (blobImage) => {
	const isHeic = ((blobImage.name.split(".").pop() === "HEIC") || (blobImage.name.split(".").pop() === "heic")) && (blobImage.type === "image/heic");
	try {
		if (!isHeic) {
			return blobImage;
		}
		const blob = await heic2any({ blob : blobImage, toType : "image/png" });
		const newFile = new File([blob], blobImage.name.replace(".HEIC", ".png"), { type : "image/png" });
		const dataTransfer = new DataTransfer();
		const fileWithPath = Object.assign(newFile, { path : blobImage.path.replace(".HEIC", ".png") });

		dataTransfer.items.add(fileWithPath);
		return dataTransfer.files[0];
	} catch (error) {
		return new Error(error);
	}
};

export default heicToPng;
