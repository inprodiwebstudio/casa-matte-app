import { shallowEqual, useSelector } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import ModalBody                     from "components/global/ModalBody";

const MinPagesLimit = ({innerProps}) => {
	const minPages = useSelector((state) => state.workSpaceSlice.data.minPages, shallowEqual);

	return (
		<ModalBody
			onSubmit={() => closeAllModals()}
			onClose={() => closeAllModals()}
			textHeader="No puedes quitar más páginas"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				Haz alcanzado el límite de páginas.
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Tienes como mínimo {minPages} páginas en un photobook.
			</div>
		</ModalBody>
	);
};

export default MinPagesLimit;
