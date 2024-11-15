import { Button }                    from "core/components";
import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import "./ConfirmationDelete.scss";

const ConfirmationDelete = ({innerProps}) => {
	const { photoQuantity, handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Estás seguro?</div>
			<div className="text-description">
				Estás por eliminar permanentemente {photoQuantity ?? 0} fotografías de tu galería, éstas se borrarán de cualquier parte donde hayan sido utilizadas
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={117}
					height={39}
					isLoading={isLoadingDelete}
					onClick={() => handdleSuccess()}
				>
					Aceptar
				</Button>
				<Button
					fontSize="18px"
					width={117}
					height={39}
					isLoading={isLoadingDelete}
					onClick={() => closeAllModals()}
				>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default ConfirmationDelete;
