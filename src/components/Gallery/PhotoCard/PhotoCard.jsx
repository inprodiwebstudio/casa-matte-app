import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { useParams }           from "react-router";
//ReactSoinner
import { MoonLoader } from "react-spinners";

//Own components
import { BigPlus, Check }                        from "Resources/icons";
import { workSpaceSlice }                        from "store/Slices";
import photoBooksConfing                         from "core/constants/photoBooksConfing";
import { resizerImage, bindAll, convertToArray } from "helpers";
import "./PhotoCard.scss";

const PhotoCard = ({
	image,
	fileId,
	isChecked,
	isSelected,
	isfullSize,
	onSelected,
	workSpaceData,
	isHideSelected,
	workSpaceSlice,
	loadingMutationGallery,
}) => {
	const { pageId } = useParams();

	const photoBookType = workSpaceData?.product ?? "white";
	const formatPhotoBook = workSpaceData?.format ?? "vertical";
	const sizePhotoBook = workSpaceData?.sizePhotoBook ?? "grande";

	const photoBookConfig = photoBooksConfing[photoBookType ?? "white"];

	const pageData = pageId === "frontpage" ? workSpaceData?.frontPage : workSpaceData?.pages?.[pageId];

	const [ isDragger, setIsDragger ] = useState(false);
	const [ loadingPhoto, setLoadingphoto ] = useState(true);
	const [ myImageUrl, setMyImageUrl ] = useState("");

	const handdleDrag = () => {
		setIsDragger(true);
		workSpaceSlice.setCurrentPhotoDrager({
			image  : image,
			fileId : fileId,
		});
	};

	const handleLeaveDragger = () => {
		workSpaceSlice.clearPhotoDrager();
		setIsDragger(false);
	};

	const handleSelectImage = (e, image) => {
		e.stopPropagation();
		onSelected(image);
	};

	const handleImageLoad = () => {
		setLoadingphoto(false);
	  };

	const loadImage = () => {
		const img = new Image();
		img.src = resizerImage(image);
		img.addEventListener("load", handleImageLoad);
		setMyImageUrl(img.src);
	};

	const addPhotoToLayout = (imageUrl) => {
		const isNotCompleteSheet1 = convertToArray(pageData?.sheet1?.photos).find(e => e.id === "");
		const modsInDoublePage = photoBookConfig[formatPhotoBook]?.sizes[sizePhotoBook]?.modsInDoublePage;

		const isSinglePage = (modsInDoublePage.includes(pageData?.sheet1?.layoutType));
		const isAvailableSheet2 = pageData?.sheet2?.photos[0];

		if (isSinglePage) {
			workSpaceSlice.addPhoto({
				sheetNo  : 1,
				layoutNo : 0,
				image    : {
					fileId,
					image : imageUrl,
				},
				pageId : pageData?.id,
			});
			return;
		}
		if (isNotCompleteSheet1) {
			const listOfPhotos = convertToArray(pageData?.sheet1?.photos);
			for (let i = 0; i < listOfPhotos.length; i++) {
				const data = listOfPhotos[i];
				if (data?.id === "") {
					workSpaceSlice.addPhoto({
						sheetNo  : 1,
						layoutNo : i,
						image    : {
							fileId,
							image : imageUrl,
						},
						pageId : pageId,
					});
					return;
				}
			}
		}
		if (!isNotCompleteSheet1 && isAvailableSheet2) {
			const listOfPhotos = convertToArray(pageData?.sheet2?.photos);
			for (let i = 0; i < listOfPhotos.length; i++) {
				const data = listOfPhotos[i];
				if (data?.id === "") {
					workSpaceSlice.addPhoto({
						sheetNo  : 2,
						layoutNo : i,
						image    : {
							fileId,
							image : imageUrl,
						},
						pageId : pageData?.id,
					});
					return;
				}
			}
		}
	};

	useEffect(() => {
		loadImage();
	}, [image]);

	return (
		<div
			className={`PhotoCard ${isfullSize && "isFullSize"} ${isDragger && "isDragger"} ${(isHideSelected && isSelected) && "isHidePhoto"}`}
			draggable="true"
			onDragStart={() => handdleDrag()}
			onDragEnd={() => handleLeaveDragger()}
			{
				...(!loadingPhoto && {
					style : {
						background : `url(${myImageUrl}) center center / cover no-repeat`,
					},
				})
			}
		>
			{
				loadingPhoto && (
					<div className="loading">
						<MoonLoader size={30} />
					</div>
				)
			}
			{
				(!loadingPhoto && !isDragger) && (
					<div className={`photo-overlay ${isSelected && "photo-selected"}`} onClick={() => addPhotoToLayout(image)}>
						<div className={`check-box ${isChecked && "isChecked"}`} onClick={(e) => handleSelectImage(e, image)}>
							{
								isChecked && (
									<div className="square-check" />
								)
							}
						</div>
						<div className="check-icon-container">
							<Check size="20px" />
						</div>
						<div className="plus-icon-container">
							<BigPlus size="35px" />
						</div>
					</div>
				)
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	workSpaceData : workSpaceSlice.data ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (PhotoCard);
