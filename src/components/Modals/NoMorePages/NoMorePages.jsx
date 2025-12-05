import { closeAllModals } from "@mantine/modals";
import ModalBody          from "components/global/ModalBody";
import React              from "react";

const NoMorePages = ({innerProps}) => {
	const {quantity} = innerProps;
	return (
		<ModalBody
			onSubmit={() => closeAllModals()}
			onClose={() => closeAllModals()}
			textHeader="No puedes agregar más páginas"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				Haz alcanzado el límite de páginas
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Tienes como máximo {quantity} páginas en el photobook.
			</div>
		</ModalBody>
	);
};

export default NoMorePages;
