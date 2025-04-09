import { Button }         from "core/components";
import { closeAllModals } from "@mantine/modals";
import React              from "react";
import "./ConfirmationPrint.scss";


const ConfirmationToPrint = () => {
	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Estás seguro?</div>
			<div className="text-description" style={{ textAlign : "center" }}>
				Estás a punto de enviar tu photobook para impresión. Una vez que confirmes, no podrás seguir editándolo ni deshacer esta acción. Serás redirigido automáticamente al pago, y tu pedido quedará confirmado. ¿Deseas aceptar?
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={300}
					height={39}
					isLoading={false}
					onClick={() => console.log("redirect to send handler")}
				>
					Aceptar y evitar
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

export default ConfirmationToPrint;
