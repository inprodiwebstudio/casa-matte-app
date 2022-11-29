import { useState } from "react";
import { connect }  from "react-redux";


//Own components
import Folder                           from "../Folder";
import DropDoc                          from "../DropDoc";
import PhotoCard                        from "../PhotoCard";
import { ScrollBar }                    from "core/components";
import { convertToArray, isValidArray } from "helpers";
import imageTest                        from "Resources/images/testingImage01.jpg";
import "./BodyGallery.scss";

const BodyGallery = ({galleryData}) => {
	const isAvailableDocs = isValidArray(convertToArray(galleryData));
	const [ testPhotosData, setTestPhotosData ] = useState({
		"image0" : {
			id    : "image0",
			image : imageTest,
		},
		"image1" : {
			id    : "image1",
			image : "https://rare-gallery.com/thumbs/560927-bora-bora-beach.jpg",
		},
		"image2" : {
			id    : "image2",
			image : "https://thumbs.dreamstime.com/b/good-morning-image-hd-wallpapers-sun-deepak-photo-graph-flowers-176211421.jpg",
		},
		"image3" : {
			id    : "image3",
			image : "https://thumbs.dreamstime.com/b/leeni-pond-plants-sri-lanka-beautiful-fish-hd-wallpapers-260261989.jpg",
		},
	});

	const [ selectedPhotos, setSelectedPhotos ] = useState({});

	const [ dataFolder, setFolderData ] = useState([
		{
			id         : 1,
			folderName : "CARPETA 1",
			images     : [],
		},
		{
			id         : 2,
			folderName : "CARPETA 2",
			images     : [],
		},
		{
			id         : 3,
			folderName : "CARPETA 3",
			images     : [],
		},
	]);

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

	const handleMovePhotos = (folderIndex) => {
		setFolderData(prev => {
			const newData = [...prev];
			newData[folderIndex].images = [...newData[folderIndex].images, ...Object.values(selectedPhotos)];
			return newData;
		});
		setTestPhotosData(prev => {
			const newData = {...prev};
			Object.values(selectedPhotos).forEach(image => {
				delete newData[image.id];
			});
			return newData;
		});
		setSelectedPhotos({});
	};

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
			{
				isAvailableDocs && (
					<ScrollBar>
						<div className="docs-list">
							<div className="photo-grid">
								{
									dataFolder?.map((folder, index) => (
										<Folder
											key={folder?.id}
											images={folder?.images}
											name={folder?.folderName}
											handleMovePhotos={() => handleMovePhotos(index)}
										/>
									))
								}
								{
									Object.values(testPhotosData).map((photo, index) => (
										<PhotoCard
											key={index}
											image={photo?.image}
											onSelected={() => handleSelected(photo)}
											isChecked={selectedPhotos[photo?.id] ? true : false}
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
	galleryData : gallerySlice?.data ?? {},
});

export default connect(mapStateToProps) (BodyGallery);
