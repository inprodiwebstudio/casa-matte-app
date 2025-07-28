/* eslint-disable import/no-extraneous-dependencies */
import heic2any from "heic2any";
const heicToPng = async (blobImage) => {
	const extension = blobImage.name.split(".").pop()?.toLowerCase();

	const heicExtensions = ["heic", "heif", "hif"];
	const mimeTypes = ["image/heic", "image/heif"];

	const isHeic =
		heicExtensions.includes(extension) ||
		mimeTypes.includes(blobImage.type);

	try {
		if (!isHeic) return blobImage;

		const blob = await heic2any({ blob : blobImage, toType : "image/png" });

		const newName = blobImage.name.replace(/\.\w+$/, ".png");
		const newFile = new File([blob], newName, { type : "image/png" });

		const dataTransfer = new DataTransfer();
		const path = blobImage.path?.replace(/\.\w+$/, ".png") || newName;
		const fileWithPath = Object.assign(newFile, { path });

		dataTransfer.items.add(fileWithPath);
		return dataTransfer.files[0];
	} catch (error) {
		return new Error(error);
	}
};

export default heicToPng;
