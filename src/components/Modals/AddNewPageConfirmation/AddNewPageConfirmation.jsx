import { Button }         from "core/components";
import { closeAllModals } from "@mantine/modals";
import React              from "react";
import "./AddNewPageConfirmation.scss";


const AddNewPageConfirmation = ({innerProps}) => {
	const { confirmationFn } = innerProps;

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Quieres agregar una nueva página al photobook?</div>
			<div className="text-description">
				Cada página adicional tiene un costo de $15 MXN. ¿Deseas agregarla?
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={117}
					height={39}
					isLoading={false}
					onClick={() => confirmationFn()}
				>
					Aceptar
				</Button>
				<Button
					fontSize="18px"
					width={117}
					height={39}
					isLoading={false}
					onClick={() => closeAllModals()}
				>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default AddNewPageConfirmation;
