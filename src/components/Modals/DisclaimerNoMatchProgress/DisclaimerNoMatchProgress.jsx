import React              from "react";
import { Button, Text }   from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import "./ConfirmationDeleteFolder.scss";

const DisclaimerNoMatchProgress = () => {
	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">Cambios sin sincroniza</div>
			<div className="text-description">
				Detectamos que el progreso de tu photobook en este dispositivo no coincide con el que está guardado en la base de datos.
				Esto puede ocurrir si abriste tu photobook en otro dispositivo o sesión.
				¿Quieres conservar los cambios de este dispositivo o reemplazarlos con los cambios guardados en la nube?
			</div>
			<div className="buttons-container">
				<Button
					radius={12}
					size="md"
					loading={false}
					color="darkCasaMatte"
				>
					<Text
						weight={400}
						color="whiteCasaMatte"
						sx={{
							fontFamily : "Helvetica",
						}}
					>
						Conservar cambios actuales
					</Text>
				</Button>
				<Button
					radius={12}
					size="md"
					color="gray"
					loading={false}
					onClick={() => closeAllModals()}
					sx={{
						fontFamily : "Helvetica",
						fontWeight : "400",
					}}
				>
					Descargar cambios guardados
				</Button>
			</div>
		</div>
	);
};

export default DisclaimerNoMatchProgress;
