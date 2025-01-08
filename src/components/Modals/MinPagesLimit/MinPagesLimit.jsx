import { shallowEqual, useSelector } from "react-redux";
import { Button }                    from "core/components";
import { closeAllModals }            from "@mantine/modals";
import React                         from "react";
import "./MinPagesLimit.scss";


const MinPagesLimit = ({innerProps}) => {
	const minPages = useSelector((state) => state.workSpaceSlice.data.minPages, shallowEqual);

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">No puedes quitar más páginas</div>
			<div className="text-description">
				Tienes como mínimo {minPages} páginas en un photobook.
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

export default MinPagesLimit;
