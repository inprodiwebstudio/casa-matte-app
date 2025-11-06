import { Button }         from "core/components";
import { closeAllModals } from "@mantine/modals";
import React              from "react";
import "./NoMorePages.scss";


const NoMorePages = ({innerProps}) => {
	const {quantity} = innerProps;
	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">No puedes agregar más páginas</div>
			<div className="text-description">
				Tienes como máximo {quantity} páginas en el photobook.
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					width={117}
					height={39}
					isLoading={false}
					onClick={() => closeAllModals()}
				>
					Cerrar
				</Button>
			</div>
		</div>
	);
};

export default NoMorePages;
