import { useState } from "react";

//Own components
import { BigPlus, MoveArrows } from "Resources/icons";
import "./PhotoCard.scss";

const PhotoCard = ({image}) => {
	const [ isChecked, setIsChecked ] = useState(false);
	return (
		<div
			className="PhotoCard"
			style={{
				backgroundImage : image ? `url(${image})` : null,
			}}
		>
			<div className="photo-overlay">
				<div className={`check-box ${isChecked && "isChecked"}`} onClick={() => setIsChecked(!isChecked)}>
					{
						isChecked && (
							<div className="square-check" />
						)
					}
				</div>
				<div className="plus-icon-container">
					<BigPlus size="80px" />
				</div>
				<div className="move-arrows-icon-container">
					<MoveArrows size="20px" />
				</div>
			</div>
		</div>
	);
};

export default PhotoCard;
