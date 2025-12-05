import { useSelector, shallowEqual } from "react-redux";
import ModalBody                     from "components/global/ModalBody";
import React                         from "react";

const DeletePageConfirm = ({innerProps}) => {
	const {  handdleSuccess } = innerProps;

	const isLoadingDelete = useSelector((state) => state.gallerySlice?.isLoadingMutation, shallowEqual);

	return (
		<ModalBody
			onSubmit={handdleSuccess}
			isLoading={isLoadingDelete}
			textHeader="Eliminar página"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Deseas eliminar la página?
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Estás a punto de eliminar la página. Una vez que confirmes, no podrás seguir editándola ni deshacer esta acción.
			</div>
		</ModalBody>
	);
};

export default DeletePageConfirm;
