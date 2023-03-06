import ImageKit from "imagekit";

const imagekit = new ImageKit({
	urlEndpoint : "https://ik.imagekit.io/joabMedel/",
	publicKey   : "public_+w27ATwX2hA3h1tUKCNcdsQRx3A=",
	privateKey  : "private_cMYhL1eX7j+xJ055yNuE3ZfuRX8=",
});

export const auth = async () => {
	const result = await imagekit.getAuthenticationParameters();
	return result;
};

export const getFiles = async (sort, userName, folderName) => {
	const limitDetect = 300;
	const sorted = sort ? sort : undefined;
	const user = userName ? userName : undefined;
	const myFolderName = folderName ? folderName : "";
	imagekit.listFiles({
		sort          : sorted,
		limit         : limitDetect,
		path          : `/${user}/${myFolderName}`,
		includeFolder : true,
	}, (error, result) => {
		if (error) {
			return error;
		} else {
			return result;
		}
	});
};
