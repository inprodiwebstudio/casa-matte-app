// import { useSelector, shallowEqual } from "react-redux";

//Own components
import photoBooksConfing from "core/constants/photoBooksConfing";

import { shallowEqual, useSelector } from "react-redux";
import "./FrontLayout.scss";

const FrontLayout = ({
	pageData,
	isThumbNail,
	isInPaginator,
	isInWorkSpcae,
}) => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product) ? "white" : photoBookData?.product;

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const handleLayoutMod = () => {
		if (pageData) {
			const LayoutMod = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[pageData?.sheet1?.layoutType]?.layout;
			if (LayoutMod) {
				return <LayoutMod isThumbNail={isThumbNail} isInPaginator={isInPaginator} data={pageData?.sheet1} isInWorkSpace={isInWorkSpcae} sheetNo="sheet1" />;
			}
		}
		return <></>;
	};

	return (
		<div className="body-front-layout">
			<div className="back-book" />
			<div className="spacer-front-book">
				<div className="spine-text">WEDDING BELLS</div>
			</div>
			<div className="front-book">
				<div className="body-front-container">
					{
						pageData && (
							handleLayoutMod()
						)
					}
					{/* <div className="photo-drager-container">
						<div className="photo-content">
							<PhotoGallery size="5em" />
						</div>
					</div>
					<h3>WEDDING BELLS</h3> */}
				</div>
			</div>
		</div>
	);
};

export default FrontLayout;
