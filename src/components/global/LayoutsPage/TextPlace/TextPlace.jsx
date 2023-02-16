//Own components
import "./TextPlace.scss";


const TextPlace = () => {
	const handleClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div tabIndex={1} className="text-place" onClick={(e) => handleClick(e)} />
	);
};

export default TextPlace;
