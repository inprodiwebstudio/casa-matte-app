
//React PhotoEditor
// eslint-disable-next-line import/no-extraneous-dependencies
import { PinturaEditor } from "@pqina/react-pintura";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	getEditorDefaults,
} from "@pqina/pintura";

import { connect }        from "react-redux";
import { closeAllModals } from "@mantine/modals";


//Own components
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import fullQualityImg     from "helpers/Functions/fullQualityImage";
import useSubmitImages    from "helpers/Hooks/useSubmitImages";
import { PostingConfig }  from "Notifications";

//Styles
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pqina/pintura/pintura.css";

const EditPhoto = ({innerProps, userName, workSpaceSlice}) => {
	const { handlerUploadImage } = useSubmitImages({userName : userName});

	// const [inlineResult, setInlineResult] = useState();

	const urlImage = fullQualityImg(innerProps?.image);

	const addEditedImage = async (file) => {
		try {
			const myImage = await handlerUploadImage(file, true);
			workSpaceSlice.addPhotoEdited({pageId : innerProps?.pageId, sheetNo : innerProps?.sheetNo, layoutNo : innerProps?.layoutNo, imageUrl : myImage?.url});
			closeAllModals();
		} catch (error) {
			PostingConfig["post"][500]();
			console.error(error);
		}
	};

	return (
		<div style={{ height : "90vh" }}>
			<PinturaEditor
				{...getEditorDefaults()}
				locale={{
					...getEditorDefaults().locale,
					labelButtonExport          : "Guardar",
					cropLabel                  : "Recortar",
					filterLabel                : "Filtros",
					finetuneLabel              : "Ajustes",
					cropLabelTabRotation       : "Rotar",
					cropLabelTabZoom           : "Zoom",
					cropLabelButtonRotateLeft  : "Rotar a la izquierda",
					cropLabelButtonRotateRight : "Rotar a la derecha",
					finetuneLabelBrightness    : "Brillo",
					finetuneLabelContrast      : "Contraste",
					finetuneLabelSaturation    : "Saturación",
					finetuneLabelExposure      : "Exposición",
					finetuneLabelTemperature   : "Temperatura",
					finetuneLabelClarity       : "Claridad",
				}}
				utils={[
					"crop",
					"filter",
					"finetune",
				]}
				src={urlImage}
				onProcess={(res) => addEditedImage(res?.dest)}
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice?.actions });

const mapStateToProps = ({ authSlice }) => ({
	userName : authSlice?.user?.username ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (EditPhoto);
