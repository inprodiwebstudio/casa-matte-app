import { useState, useEffect } from "react";
import { connect }             from "react-redux";


//Own components
import Folder                                    from "../Folder";
import DropDoc                                   from "../DropDoc";
import PhotoCard                                 from "../PhotoCard";
import { ScrollBar }                             from "core/components";
import { gallerySlice }                          from "store/Slices";
import { convertToArray, isValidArray, bindAll } from "helpers";
import { CircleArrow, CrossSelector }            from "Resources/icons";
import "./BodyGallery.scss";

const BodyGallery = ({galleryData, galleryPathRoute, gallerySlice, galleryTypeDropedView, gallerySelectedData}) => {
	const isAvailableDocs = isValidArray(convertToArray(galleryData));

	const [ myGalleryData, setMyGalleryData ] = useState([]);

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	useEffect(() => {
		const toArrData = Object.values(galleryData).map(data => data);
		if (galleryPathRoute === "main") {
			const dataFilteredMain = toArrData.filter(dirent => (!dirent?.parentId));
			setMyGalleryData(dataFilteredMain);
			return;
		}
		const dataFilteredPath = toArrData.filter(dirent => dirent?.parentId === galleryPathRoute);
		setMyGalleryData(dataFilteredPath);
	}, [galleryData, galleryPathRoute]);


	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div style={{ height : "34px", width : "100%" }} />
				<h3>{galleryPathRoute === "main" ? "GALERÍA" : galleryPathRoute}</h3>
				<div className="actions-header-container">
					{
						galleryPathRoute !== "main" && (
							<div className="icon-style" onClick={() => gallerySlice.setGalleryPath("main")}>
								<CircleArrow size="30px" />
							</div>
						)
					}
					<div className="filter-selector-container" />
					{
						isSelectedData && (
							<div className="icon-style" onClick={() => gallerySlice.clearSelectedData()}>
								<CrossSelector size="30px" />
							</div>
						)
					}

				</div>
			</div>
			{
				!isAvailableDocs && (
					<DropDoc />
				)
			}
			{
				isAvailableDocs && (
					<ScrollBar>
						{
							galleryTypeDropedView && (
								<div
									style={{
										zIndex     : "2",
										position   : "absolute",
										height     : "calc(100% - 150px)",
										width      : "calc(100% - 60px)",
										display    : "flex",
										background : "rgba(247, 245, 241, 0.95)",
									}}
								>
									<DropDoc />
								</div>
							)
						}
						<div className="docs-list">
							<div className="photo-grid">
								{
									myGalleryData?.filter(data => data?.folderName).map(data => (
										<Folder
											key={data?.id}
											images={data?.thumbImages}
											name={data?.folderName}
											onSelectedFolder={() => gallerySlice.setGalleryPath(data?.id)}
											handleMovePhotos={() =>gallerySlice.moveToFolder(data?.id)}
										/>
									))
								}
								{
									myGalleryData?.filter(data => !data?.folderName).map((data, index) => (
										<PhotoCard
											key={index}
											image={data?.image}
											onSelected={() => gallerySlice.setSelectedData(data)}
											isChecked={gallerySelectedData[data?.id] ? true : false}
										/>
									))
								}
							</div>
						</div>
					</ScrollBar>
				)
			}
		</div>
	);
};

const mapStateToProps = ({ gallerySlice }) => ({
	galleryData           : gallerySlice?.data ?? {},
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "main",
	gallerySelectedData   : gallerySlice?.selectedData ?? {},
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
