
//React PhotoEditor
// eslint-disable-next-line import/no-extraneous-dependencies
import { PinturaEditor } from "@pqina/react-pintura";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	getEditorDefaults,
} from "@pqina/pintura";

import { useContext, useEffect, useState } from "react";
import { connect }                         from "react-redux";
import { closeAllModals }                  from "@mantine/modals";


//Own components
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import fullQualityImg     from "helpers/Functions/fullQualityImage";
import useSubmitImages    from "helpers/Hooks/useSubmitImages";
import { PostingConfig }  from "Notifications";

//Styles
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pqina/pintura/pintura.css";
import { currentConfigPhotoBookContext } from "contexts/configContext";

const EditPhoto = ({innerProps, userName}) => {
	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const [validUrlImg, setValidUrlImg] = useState("");

	const { handlerUploadImage } = useSubmitImages({userName : userName});
	const [ isUploading, setIsUploading ] = useState(undefined);

	const urlImage = fullQualityImg(innerProps?.image);

	const addEditedImage = async (file) => {
		try {
			setIsUploading("Cargando imagen...");
			const myImage = await handlerUploadImage(file, true);
			setCurrentConfigPhotoBook(prev => ({
				...prev,
				[`sheet${innerProps?.sheetNo}`] : {
					...prev[`sheet${innerProps?.sheetNo}`],
					photos : {
						...prev[`sheet${innerProps?.sheetNo}`]?.photos,
						[innerProps?.layoutNo] : {
							...prev[`sheet${innerProps?.sheetNo}`]?.photos?.[innerProps?.layoutNo],
							urlPhotoEdited : myImage?.url,
						},
					},
				},
			}));
			setIsUploading(undefined);

			closeAllModals();
		} catch (error) {
			PostingConfig["post"][500]();
			console.error(error);
			throw error;
		}
	};

	const getValidImageUrl = (url) => {
		const tryLoad = (src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(src);      // Si carga bien, devolvemos el src
				img.onerror = () => reject(new Error(`error img charge: ${src}`));
				img.src = src;
			});
		};

		return tryLoad(url).catch(() => {
			const fallbackUrl = url.replace(".png", ".jpg");
			if (fallbackUrl === url) throw new Error("Not valid fallbackUrl");
			return tryLoad(fallbackUrl);
		});
	};

	const handlerGetImage = async () => {
		try {
			const urlValida = await getValidImageUrl(urlImage);
			return urlValida;
		} catch (err) {
			console.error("Error:", err);
		}
	};

	useEffect(() => {
		handlerGetImage().then((res) => {
			console.log(res);
			setValidUrlImg(res);
		});
	}, []);

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
				src={validUrlImg}
				status={isUploading}
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
