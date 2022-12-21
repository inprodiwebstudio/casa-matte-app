import { useState } from "react";

//Own components
import resizerImage       from "../helpers/resizerImage";
import { BigPlus, Check } from "Resources/icons";
import "./PhotoCard.scss";

const PhotoCard = ({image, onSelected, isChecked}) => {
	const [ isSelected, setIsSelected ] = useState(false);

	return (
		<div
			className="PhotoCard"
			style={{
				backgroundImage : image ? `url(${resizerImage(image)})` : null,
			}}
		>
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
		</div>
	);
};

export default PhotoCard;
