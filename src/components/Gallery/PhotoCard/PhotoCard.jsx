import { useState } from "react";
import { connect }  from "react-redux";

//Own components
import { BigPlus, Check }                             from "Resources/icons";
import { workSpaceSlice }                             from "store/Slices";
import { resizerImage, bindAll, resizerQualityImage } from "helpers";
import "./PhotoCard.scss";

const PhotoCard = ({image, onSelected, isChecked, loadingMutationGallery, workSpaceSlice}) => {
	const [ isSelected, setIsSelected ] = useState(false);

	const handdleDrag = () => {
		workSpaceSlice.setCurrentPhotoDrager(resizerQualityImage(image));
	};
	return (
		<div
			className="PhotoCard"
			draggable="true"
			onDragStart={() => handdleDrag()}
			onDragEnd={() => workSpaceSlice.clearPhotoDrager()}
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
				!loadingMutationGallery && (
					<div className={`photo-overlay ${isSelected && "photo-selected"}`}>
						<div className={`check-box ${isChecked && "isChecked"}`} onClick={() => onSelected()}>
							{
								isChecked && (
									<div className="square-check" />
								)
							}
						</div>
						<div className="check-icon-container">
							<Check size="20px" />
						</div>
						<div className="plus-icon-container" onClick={() => setIsSelected(!isSelected)}>
							<BigPlus size="80px" />
						</div>
					</div>
				)
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (PhotoCard);
