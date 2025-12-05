import { Text }                      from "@mantine/core";
import React                         from "react";
import { closeAllModals }            from "@mantine/modals";
import { shallowEqual, useSelector } from "react-redux";
import ModalBody                     from "components/global/ModalBody";

const ConfirmationDeleteFolder = ({innerProps}) => {
	const {actionDelete} = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	const onCloseButton = () => {
		closeAllModals();
	};

	return (
		<ModalBody
			onSubmit={actionDelete}
			onClose={onCloseButton}
			isLoading={isLoadingDelete}
			textHeader="Eliminar carpeta"
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
				Estás por eliminar permanentemente la carpeta, se borrará su contenido de cualquier parte donde haya sido utilizada.
			</Text>
		</ModalBody>
	);
};

export default ConfirmationDeleteFolder;
