import { Button }                    from "core/components";
import { closeAllModals }            from "@mantine/modals";
import { shallowEqual, useSelector } from "react-redux";
import React                         from "react";
import "./AddNewPageConfirmation.scss";
import { currencyFormat }            from "helpers";


const AddNewPageConfirmation = ({innerProps}) => {
	const { confirmationFn } = innerProps;

	const sizePhotoBook = useSelector((state) => state.workSpaceSlice.data.sizePhotoBook, shallowEqual);

	const handlerPriceExtraCost = () => {
		let extraCost = 0;
		if ((sizePhotoBook === "chico") || (sizePhotoBook === "mediano")) {
			extraCost = 15;
		}
		extraCost = 22;
		return extraCost;
	};

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Quieres agregar una nueva página al photobook?</div>
			<div className="text-description">
				Cada página adicional tiene un costo de {currencyFormat(handlerPriceExtraCost())} MXN. ¿Deseas agregarla?
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
