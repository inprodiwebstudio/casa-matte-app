import React              from "react";
import ModalBody          from "components/global/ModalBody";
import { closeAllModals } from "@mantine/modals";
// import "./ConfirmationDeleteFolder.scss";

const DisclaimerHiddenPhoto = () => {
	return (
		<ModalBody
			onSubmit={() => closeAllModals()}
			onClose={() => closeAllModals()}
			textHeader="Aviso en el uso de la portada"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				El tipo de portada que estás utilizando incluye márgenes de rebase (puntos de corte).
				Cualquier parte de tu foto que quede fuera de estos márgenes será recortada en la versión final.

				Asegúrate de colocar tu imagen dentro de la zona segura del layout y evita dejar elementos importantes cerca del borde.
			</div>
		</ModalBody>
	);
};

export default DisclaimerHiddenPhoto;
