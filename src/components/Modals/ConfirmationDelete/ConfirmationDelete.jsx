import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import ModalBody                     from "components/global/ModalBody";

const ConfirmationDelete = ({innerProps}) => {
	const { photoQuantity, handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<ModalBody
			onSubmit={handdleSuccess}
			onClose={() => closeAllModals()}
			isLoading={isLoadingDelete}
			textHeader="Eliminar fotografías"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Estás seguro?
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Estás por eliminar permanentemente {photoQuantity ?? 0} fotografías de tu galería, éstas se borrarán de cualquier parte donde hayan sido utilizadas
			</div>
		</ModalBody>
	);
};

export default ConfirmationDelete;
