import { useState, useEffect } from "react";
import { connect }             from "react-redux";


//Own components
import Folder                                    from "../Folder";
import DropDoc                                   from "../DropDoc";
import PhotoCard                                 from "../PhotoCard";
import { ScrollBar }                             from "core/components";
import { gallerySlice }                          from "store/Slices";
import { convertToArray, isValidArray, bindAll } from "helpers";
import "./BodyGallery.scss";

const BodyGallery = ({galleryData, galleryPathRoute, gallerySlice, galleryTypeDropedView, gallerySelectedData}) => {
	const isAvailableDocs = isValidArray(convertToArray(galleryData));

	const [ myGalleryData, setMyGalleryData ] = useState([]);

	// const [ dataFolder, setFolderData ] = useState([
	// 	{
	// 		id         : 1,
	// 		folderName : "CARPETA 1",
	// 		images     : [],
	// 	},
	// 	{
	// 		id         : 2,
	// 		folderName : "CARPETA 2",
	// 		images     : [],
	// 	},
	// 	{s
	// 		id         : 3,
	// 		folderName : "CARPETA 3",
	// 		images     : [],
	// 	},
	// ]);

	useEffect(() => {
		const toArrData = Object.values(galleryData).map(data => data);
		if (galleryPathRoute === "main") {
			const dataFilteredMain = toArrData.filter(dirent => (!dirent?.parentId));
			setMyGalleryData(dataFilteredMain);
			return;
		}
		const dataFilteredPath = toArrData.filter(dirent => dirent?.parentId === galleryPathRoute);
		console.log(dataFilteredPath);
		setMyGalleryData(dataFilteredPath);
	}, [galleryData, galleryPathRoute]);

	// const handleMovePhotos = (folderIndex) => {
	// };


	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div style={{ height : "26px", width : "100%" }} />
				<h3>GALERÍA</h3>
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
										height     : "calc(100% - 100px)",
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
									myGalleryData?.map((data, index) => {
										if (data?.folderName) {
											return (
												<Folder
													key={data?.id}
													images={data?.thumbImages}
													name={data?.folderName}
													onSelectedFolder={() => gallerySlice.setGalleryPath(data?.id)}
													// handleMovePhotos={() => handleMovePhotos(index)}
												/>
											);
										}
										return (
											<PhotoCard
												key={index}
												image={data?.image}
												onSelected={() => gallerySlice.setSelectedData(data)}
												isChecked={gallerySelectedData[data?.id] ? true : false}
											/>
										);
									})
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
