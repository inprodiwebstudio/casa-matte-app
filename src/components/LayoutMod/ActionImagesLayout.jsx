import { Thrash, Pencil }   from "Resources/icons";
import { openContextModal } from "@mantine/modals";
import { workSpaceSlice }   from "store/Slices";
import { connect }          from "react-redux";

//Own components
import "./ActionImagesLayout.scss";
import { bindAll } from "helpers";

const ActionImageslayout = ({image, sheetNo, layoutNo, pageId, workSpaceSlice}) => {
	const activeModal = (e) => {
		e.stopPropagation();
		openContextModal({
			modal      : "editPhoto",
			innerProps : {
				image,
				pageId,
				sheetNo,
				layoutNo,
			},
		});
	};

	const handleRemove = (e) => {
		e.stopPropagation();
		workSpaceSlice.removePhoto({
			sheetNo  : sheetNo,
			layoutNo : layoutNo,
			pageId   : pageId,
		});
	};
	return (
		<div className="ActionImagesLayout">
			<Thrash size={"10%"} style={{cursor : "pointer"}} onClick={(e) => handleRemove(e)} />
			<Pencil size={"10%"} style={{cursor : "pointer"}} onClick={(e) => activeModal(e)} />
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (ActionImageslayout);
