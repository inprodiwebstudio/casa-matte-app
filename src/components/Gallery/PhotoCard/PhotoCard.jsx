//Own components
import { BigPlus, MoveArrows } from "Resources/icons";
import "./PhotoCard.scss";

const PhotoCard = ({image}) => {
	return (
		<div
			className="PhotoCard"
			style={{
				backgroundImage : image ? `url(${image})` : null,
			}}
		>
			<div className="photo-overlay">
				<div className="check-box">
					&nbsp;
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
