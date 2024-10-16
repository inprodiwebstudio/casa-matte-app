/* eslint-disable import/extensions */
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import highQualityImgUrl from "helpers/Functions/highQualityImg";
const imgUrlPdf = (imgData) => {
	if ( !imgData ) return "null";

	const publicUrlHighRes = highQualityImgUrl(imgData);

	return publicUrlHighRes;
};

export default imgUrlPdf;
