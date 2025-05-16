/* eslint-disable import/extensions */
const imgUrlPdf = (imgData) => {
	if ( !imgData ) return "null";

	const publicUrlHighRes = imgData.url;

	return publicUrlHighRes;
};

export default imgUrlPdf;
