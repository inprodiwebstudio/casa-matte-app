import { Button }                    from "core/components";
import { useSelector, shallowEqual } from "react-redux";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import "./DeletePageConfirm.scss";

const DeletePageConfirm = ({innerProps}) => {
	const {  handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Deseas eliminar la página?</div>
			<div className="text-description">
				Estás a punto de eliminar la página. Una vez que confirmes, no podrás seguir editándola ni deshacer esta acción.
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

export default DeletePageConfirm;
