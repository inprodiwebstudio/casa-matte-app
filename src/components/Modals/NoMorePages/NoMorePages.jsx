import { Button }         from "core/components";
import { closeAllModals } from "@mantine/modals";
import React              from "react";
import "./NoMorePages.scss";


const NoMorePages = ({innerProps}) => {
	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">No puedes agregar más páginas</div>
			<div className="text-description">
				Tienes como máximo 400 páginas en un photobook.
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
