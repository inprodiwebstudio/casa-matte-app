import "./Card.scss";

const Card = ({image, body, isButton, onSelect}) => {
	return (
		<div
			className={isButton ? "Card isButton" : "Card"}
			{...(onSelect && { onClick : () => onSelect()})}
		>
			{image && image}
			<p>
				{body}
			</p>
		</div>
	);
};

export default Card;
