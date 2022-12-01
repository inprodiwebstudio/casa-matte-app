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

const BodyGallery = ({galleryData, galleryPathRoute, gallerySlice}) => {
	const isAvailableDocs = isValidArray(convertToArray(galleryData));

	const [ myGalleryData, setMyGalleryData ] = useState([]);

	const [ selectedPhotos, setSelectedPhotos ] = useState({});

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
		setMyGalleryData(dataFilteredPath);
	}, [galleryData, galleryPathRoute]);


	const handleSelected = (dataImage) => {
		setSelectedPhotos(prev => {
			const newData = {...prev};
			if (newData[dataImage?.id]) {
				delete newData[dataImage?.id];
				return newData;
			}
			newData[dataImage?.id] = dataImage;
			return newData;
		});
	};

	// const handleMovePhotos = (folderIndex) => {
	// 	setFolderData(prev => {
	// 		const newData = [...prev];
	// 		newData[folderIndex].images = [...newData[folderIndex].images, ...Object.values(selectedPhotos)];
	// 		return newData;
	// 	});
	// 	deleteData(selectedPhotos);
	// 	setSelectedPhotos({});
	// };


	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div style={{ height : "26px", width : "100%" }}>&nbsp;</div>
				<h3>GALERÍA</h3>
			</div>
			{
				!isAvailableDocs && (
					<DropDoc />
				)
			}
			{/* <DropDoc /> */}
			{
				isAvailableDocs && (
					<ScrollBar>
						<div className="docs-list">
							<div className="photo-grid">
								{/* {
									dataFolder?.map((folder, index) => (
										<Folder
											key={folder?.id}
											images={folder?.images}
											name={folder?.folderName}
											handleMovePhotos={() => handleMovePhotos(index)}
										/>
									))
								} */}
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
												onSelected={() => handleSelected(data)}
												isChecked={selectedPhotos[data?.id] ? true : false}
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
	galleryData      : gallerySlice?.data ?? {},
	galleryPathRoute : gallerySlice?.galleryPathName ?? "main",
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (BodyGallery);
