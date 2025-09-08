
//React PhotoEditor
// eslint-disable-next-line import/no-extraneous-dependencies
import { PinturaEditor } from "@pqina/react-pintura";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	getEditorDefaults,
} from "@pqina/pintura";

import { connect }        from "react-redux";
import { closeAllModals } from "@mantine/modals";

//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";


//Own components
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import fullQualityImg     from "helpers/Functions/fullQualityImage";
import useSubmitImages    from "helpers/Hooks/useSubmitImages";
import { PostingConfig }  from "Notifications";

//Styles
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pqina/pintura/pintura.css";
import { useContext, useState } from "react";

const EditPhoto = ({innerProps, userName}) => {
	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);
	const { handlerUploadImage } = useSubmitImages({userName : userName});
	const [statusLoading, setStatusLoading] = useState(undefined);

	// const [inlineResult, setInlineResult] = useState();

	const urlImage = fullQualityImg(innerProps?.image);

	const addEditedImage = async (file) => {
		try {
			setStatusLoading("Cargando imagen ...");
			const myImage = await handlerUploadImage(file, true);
			setCurrentConfigPhotoBook(prev => ({
				...prev,
				[`sheet${innerProps?.sheetNo}`] : {
					...prev?.[`sheet${innerProps?.sheetNo}`],
					photos : {
						...prev?.[`sheet${innerProps?.sheetNo}`]?.photos,
						[innerProps?.layoutNo] : {
							...prev?.[`sheet${innerProps?.sheetNo}`]?.photos?.[innerProps?.layoutNo],
							urlPhotoEdited : myImage?.url,
						},
					},
				},
			}));
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
				status={statusLoading}
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
