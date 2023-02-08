import { connect }   from "react-redux";
import { useState }  from "react";
import { useParams } from "react-router";

//Own components
import { BigPlus, Check }                        from "Resources/icons";
import { workSpaceSlice }                        from "store/Slices";
import { resizerImage, bindAll, convertToArray } from "helpers";
import "./PhotoCard.scss";

const PhotoCard = ({image, isSelected, fileId, onSelected, isChecked, loadingMutationGallery, workSpaceSlice, workSpaceData}) => {
	const { pageId } = useParams();

	const pageData = workSpaceData?.pages?.[pageId];

	const [ isDragger, setIsDragger ] = useState(false);

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

	const addPhotoToLayout = (imageUrl) => {
		const isNotCompleteSheet1 = convertToArray(pageData?.sheet1?.photos).find(e => e.id === "");

		const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType));
		const isAvailableSheet2 = pageData?.sheet2?.photos[0];

		if (isSinglePage) {
			workSpaceSlice.addPhoto({
				sheetNo  : "sheet1",
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
						sheetNo  : "sheet1",
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
		if (!isNotCompleteSheet1 && isAvailableSheet2) {
			const listOfPhotos = convertToArray(pageData?.sheet2?.photos);
			for (let i = 0; i < listOfPhotos.length; i++) {
				const data = listOfPhotos[i];
				if (data?.id === "") {
					workSpaceSlice.addPhoto({
						sheetNo  : "sheet2",
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

	return (
		<div
			className={`PhotoCard ${isDragger && "isDragger"}`}
			draggable="true"
			onDragStart={() => handdleDrag()}
			onDragEnd={() => handleLeaveDragger()}
			style={{
				background : image ? `url(${resizerImage(image)}) center center / cover no-repeat` : "grey",
			}}
		>
			{
				loadingMutationGallery && (
					<div className="loading" />
				)
			}
			{
				(!loadingMutationGallery && !isDragger) && (
					<div className={`photo-overlay ${isSelected && "photo-selected"}`}>
						<div className={`check-box ${isChecked && "isChecked"}`} onClick={() => onSelected(image)}>
							{
								isChecked && (
									<div className="square-check" />
								)
							}
						</div>
						<div className="check-icon-container">
							<Check size="20px" />
						</div>
						<div className="plus-icon-container" onClick={() => addPhotoToLayout(image)}>
							<BigPlus size="80px" />
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
