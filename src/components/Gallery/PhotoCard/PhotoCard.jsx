//Own components
import "./PhotoCard.scss";

const PhotoCard = ({image}) => {
	return (
		<div
			className="PhotoCard"
			style={{
				backgroundImage : image ? `url(${image})` : null,
			}}
		>
			&nbsp;
		</div>
	);
};

export default PhotoCard;
