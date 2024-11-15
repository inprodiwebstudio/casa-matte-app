import React                         from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Button, Text }              from "@mantine/core";
import { closeAllModals }            from "@mantine/modals";
import "./ConfirmationDeleteFolder.scss";

const ConfirmationDelete = ({innerProps}) => {
	const { handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Estás seguro?</div>
			<div className="text-description">
				Estás por eliminar permanentemente la carpeta, se borrarán de cualquier parte donde haya sido utilizado.
			</div>
			<div className="buttons-container">
				<Button
					radius={12}
					size="md"
					loading={isLoadingDelete}
					color="darkCasaMatte"
					onClick={() => handdleSuccess()}
				>
					<Text
						weight={400}
						color="whiteCasaMatte"
						sx={{
							fontFamily : "Helvetica",
						}}
					>
						ACEPTAR
					</Text>
				</Button>
				<Button
					radius={12}
					size="md"
					color="gray"
					loading={isLoadingDelete}
					onClick={() => closeAllModals()}

					sx={{
						fontFamily : "Helvetica",
						fontWeight : "400",
					}}
				>
					CANCELAR
				</Button>
			</div>
		</div>
	);
};

export default ConfirmationDelete;
