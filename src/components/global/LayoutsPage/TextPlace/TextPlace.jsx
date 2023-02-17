import { openContextModal } from "@mantine/modals";

//Own components
import "./TextPlace.scss";


const TextPlace = () => {
	const handleClick = (e) => {
		e.stopPropagation();
	};

	const activeEditText = (e) => {
		e.stopPropagation();
		openContextModal({
			modal : "editText",
			size  : "50vw",
		});
	};

	return (
		<div tabIndex={1} onDoubleClick={(e) => activeEditText(e)} className="text-place" onClick={(e) => handleClick(e)} />
	);
};

export default TextPlace;
