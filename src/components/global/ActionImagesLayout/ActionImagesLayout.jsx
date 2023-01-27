import { Thrash, Pencil }   from "Resources/icons";
import { openContextModal } from "@mantine/modals";


//Own components
import "./ActionImagesLayout.scss";

const ActionImageslayout = ({image}) => {
	const activeModal = (e) => {
		e.stopPropagation();
		openContextModal({
			modal      : "editPhoto",
			innerProps : {
				image,
			},
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
