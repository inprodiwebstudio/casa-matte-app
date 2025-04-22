import { Button }                    from "core/components";
import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import "./DisclaimerDropPhotos.scss";

const DisclaimerDropPhotos = ({innerProps}) => {
	const {  handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Estás de acuerdo?</div>
			<div className="text-description">
				Recuerda subir tus fotos en alta calidad para una mejor experiencia de visualización y la correcta impresión de tu photobook. Tus fotografías serán subidas en su calidad original.
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={117}
					height={39}
					isLoading={isLoadingDelete}
					onClick={() => handdleSuccess()}
				>
					Aceptar
				</Button>
				<Button
					fontSize="18px"
					width={117}
					height={39}
					isLoading={isLoadingDelete}
					onClick={() => closeAllModals()}
				>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default DisclaimerDropPhotos;
