//redux
import { shallowEqual, useSelector } from "react-redux";

import photoBooksConfing from "core/constants/photoBooksConfing";

import "./SpreadBook.scss";

const SpreadBook = ({
	isAvailableRightSheet = true,
	contents,
}) => {
	const {ContentSheet1, ContentSheet2} = contents;

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const {sizePhotoBook, format, product} = photoBookData;

	const photoBookConfigProperties = photoBooksConfing[product]?.[format]?.sizes?.[sizePhotoBook];

	const {aspectRatio} = photoBookConfigProperties;

	const handlerAspectRatio = `${aspectRatio[0]}/${aspectRatio[1]}`;

	return (
		<div
			className="SpreadBook"
		>
			<div
				className="page-body"
				style={{
					aspectRatio : handlerAspectRatio,
				}}
			>
				{ContentSheet1 && <ContentSheet1 />}
			</div>
			{
				isAvailableRightSheet && (
					<div
						className="page-body"
						style={{
							aspectRatio : handlerAspectRatio,
						}}
					>
						{ContentSheet2 && <ContentSheet2 />}
					</div>
				)
			}
		</div>
	);
};

export default SpreadBook;
