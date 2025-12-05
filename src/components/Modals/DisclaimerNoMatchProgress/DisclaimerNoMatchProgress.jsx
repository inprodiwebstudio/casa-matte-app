import React              from "react";
import ModalBody          from "components/global/ModalBody";
import { closeAllModals } from "@mantine/modals";
// import "./ConfirmationDeleteFolder.scss";

const DisclaimerNoMatchProgress = () => {
	return (
		<ModalBody
			onSubmit={() => closeAllModals()}
			onClose={() => closeAllModals()}
			textHeader="Cambios sin sincronizar"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				Cambios sin sincroniza
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Detectamos que el progreso de tu photobook en este dispositivo no coincide con el que está guardado en la base de datos.
				Esto puede ocurrir si abriste tu photobook en otro dispositivo o sesión.
				¿Quieres conservar los cambios de este dispositivo o reemplazarlos con los cambios guardados en la nube?
			</div>
		</ModalBody>
	);
};

export default DisclaimerNoMatchProgress;
