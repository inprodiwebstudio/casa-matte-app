import { Thrash, Pencil }   from "Resources/icons";
import { openContextModal } from "@mantine/modals";
// import { workSpaceSlice }   from "store/Slices";
import { useContext } from "react";
// import { useDispatch }      from "react-redux";

//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";

//Own components
import "./ActionImagesLayout.scss";

const ActionImageslayout = ({image, sheetNo, layoutNo, pageId, containerPhotoUuid}) => {
	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const activeModal = (e) => {
		e.stopPropagation();

		// Se mide el contenedor del slot al abrir el editor para obtener la
		// relación de aspecto real del layout donde está montada la imagen.
		const documentContainer = document.getElementById(containerPhotoUuid);
		const clientWidth = documentContainer ? documentContainer.offsetWidth : 0;
		const clientHeight = documentContainer ? documentContainer.offsetHeight : 0;
		const aspectRatio = clientHeight > 0 ? clientWidth / clientHeight : undefined;

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
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev[`sheet${sheetNo}`],
				photos : {
					...prev[`sheet${sheetNo}`]?.photos,
					[layoutNo] : {
						id             : undefined,
						url            : undefined,
						pixels         : undefined,
						urlPhotoEdited : undefined,
					},
				},
			},
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
