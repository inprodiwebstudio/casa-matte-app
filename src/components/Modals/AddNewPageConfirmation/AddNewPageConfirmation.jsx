import { closeAllModals }            from "@mantine/modals";
import { shallowEqual, useSelector } from "react-redux";
import { currencyFormat }            from "helpers";
import ModalBody                     from "components/global/ModalBody";


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
		<ModalBody
			onSubmit={confirmationFn}
			onClose={() => closeAllModals()}
			textHeader="Agregar nueva página"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Quieres agregar una nueva página al photobook?
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Cada página adicional tiene un costo de {currencyFormat(handlerPriceExtraCost())} MXN. ¿Deseas agregarla?
			</div>
		</ModalBody>
	);
};

export default AddNewPageConfirmation;
