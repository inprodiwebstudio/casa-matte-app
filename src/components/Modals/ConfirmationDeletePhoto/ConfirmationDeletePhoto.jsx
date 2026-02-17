import { Text }                      from "@mantine/core";
import React                         from "react";
import { closeAllModals }            from "@mantine/modals";
import ModalBody                     from "components/global/ModalBody";
import { shallowEqual, useSelector } from "react-redux";

const ConfirmationDeletePhoto = ({innerProps}) => {
	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	const {actionDelete} = innerProps;
	const onCloseButton = () => {
		closeAllModals();
	};

	return (
		<ModalBody
			onSubmit={actionDelete}
			onClose={onCloseButton}
			isLoading={isLoadingDelete}
			textHeader="Eliminar fotografías"
		>
			<Text
				size="15px"
				align="center"
				weight="bolder"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
				w="90%"
			>
				Estás por eliminar permanentemente las fotografías seleccionadas de tu galería, se borrará de cualquier parte donde haya sido utilizada.
			</Text>
		</ModalBody>
	);
};

export default ConfirmationDeletePhoto;
