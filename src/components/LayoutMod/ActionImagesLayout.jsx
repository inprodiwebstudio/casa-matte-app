import { Thrash, Pencil }   from "Resources/icons";
import { openContextModal } from "@mantine/modals";
import { workSpaceSlice }   from "store/Slices";
import { useDispatch }      from "react-redux";

//Own components
import "./ActionImagesLayout.scss";

const ActionImageslayout = ({image, sheetNo, layoutNo, pageId, containerPhotoUuid}) => {
	const dispatch = useDispatch();

	const documentContainer =  document.getElementById(containerPhotoUuid);

	const clientWidth = documentContainer ? documentContainer.offsetWidth : 0;
	const clientHeight = documentContainer ? documentContainer.offsetHeight : 0;

	const aspectRatio = clientWidth / clientHeight;

	const activeModal = (e) => {
		e.stopPropagation();
		openContextModal({
			modal      : "editPhoto",
			innerProps : {
				image,
				pageId,
				sheetNo,
				layoutNo,
				aspectRatio,
			},
		});
	};

	const handleRemove = (e) => {
		e.stopPropagation();
		dispatch(workSpaceSlice.actions.removePhoto({
			sheetNo  : sheetNo,
			layoutNo : layoutNo,
			pageId   : pageId,
		}));
	};
	return (
		<div className="ActionImagesLayout">
			<Thrash size={"10%"} style={{cursor : "pointer"}} onClick={(e) => handleRemove(e)} />
			<Pencil size={"10%"} style={{cursor : "pointer"}} onClick={(e) => activeModal(e)} />
		</div>
	);
};

export default ActionImageslayout;
