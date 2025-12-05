import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import ModalBody                     from "components/global/ModalBody";

const DisclaimerDropPhotos = ({innerProps}) => {
	const {  handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<ModalBody
			onSubmit={handdleSuccess}
			onClose={() => closeAllModals()}
			isLoading={isLoadingDelete}
			textHeader="Agregar fotografías"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Estás de acuerdo?
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Recuerda subir tus fotos en alta calidad para una mejor experiencia de visualización y la correcta impresión de tu photobook. Tus fotografías serán subidas en su calidad original.
			</div>
		</ModalBody>
	);
};

export default DisclaimerDropPhotos;
