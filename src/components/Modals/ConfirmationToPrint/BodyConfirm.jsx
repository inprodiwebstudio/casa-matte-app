// import { Text }           from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import ModalBody          from "components/global/ModalBody";

const BodyConfirm = ({
	onSubmit,
	isLoading,
}) => {
	return (
		<ModalBody
			onSubmit={onSubmit}
			onClose={() => closeAllModals()}
			isLoading={isLoading}
			textHeader="Enviar para impresión"
		>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Estás seguro?
			</div>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					textAlign     : "center",
				}}
			>
				Estás a punto de enviar tu photobook para impresión. Una vez que confirmes, no podrás seguir editándolo ni deshacer esta acción. Tu pedido quedará confirmado. ¿Deseas continuar?
			</div>
		</ModalBody>
	);
};

export default BodyConfirm;
