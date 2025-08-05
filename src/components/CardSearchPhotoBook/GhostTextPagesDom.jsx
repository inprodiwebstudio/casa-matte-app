import BookPages                     from "components/BookPages";
import { shallowEqual, useSelector } from "react-redux";
import "./GhostTextPageDom.scss";

const GhostTextPagesDom = ({textPages}) => {
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	return (
		<div
			style={{
				height : "100%",
				width  : "100%",
			}}>
			<div
				style={{
					height   : "500px",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				<div
					className="PreviewPages"
				>
					{
						textPages.map((page, index) => (
							<div className="photoBookContainer" key={index}>
								<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview`}>
									<BookPages
										isInWorkSpcae={true}
										loading={isLoading}
										pageData={page}
									/>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default GhostTextPagesDom;
