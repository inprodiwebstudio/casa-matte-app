import { Thrash, Pencil }   from "Resources/icons";
import { openContextModal } from "@mantine/modals";


//Own components
import "./ActionImagesLayout.scss";

const ActionImageslayout = () => {
	const activeModal = (e) => {
		e.stopPropagation();
		openContextModal({
			modal           : "editPhoto",
			withCloseButton : false,
		});
	};
	return (
		<div className="ActionImagesLayout">
			<Thrash size={"10%"} style={{cursor : "pointer"}} />
			<Pencil size={"10%"} style={{cursor : "pointer"}} onClick={(e) => activeModal(e)} />
		</div>
	);
};

export default ActionImageslayout;
