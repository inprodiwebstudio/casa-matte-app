/* eslint-disable import/extensions */
import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import highQualityImgUrl  from "helpers/Functions/highQualityImg";
const imgUrlPdf = (imgData) => {
	if ( !imgData ) return "null";

	const urlSelected =  selectPhotoUrl(imgData);
	const publicUrlHighRes = highQualityImgUrl(urlSelected);

	return publicUrlHighRes;
};

export default imgUrlPdf;
