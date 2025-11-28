import { shallowEqual, useSelector } from "react-redux";
import "./GhostFrontDom.scss";
import CoverBook                     from "components/CoverBook";

const GhostFrontDom = () => {
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable") {
			return "travel-coffee-table";
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	return (
		<div className="GhostFrontDom">
			<div
				className={
				`spreadFrontContainer
							${handlerTypeProductFormat()}-workSpace
							`
				}
			>
				<CoverBook isInWorkSpace />
			</div>
		</div>
	);
};

export default GhostFrontDom;
