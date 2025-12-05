import { Button } from "core/components";
import "./RefreshNotification.scss";

const RefreshNotification = () => {
	const refreshAction = () => {
		window.location.reload();
	};

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">Hay una nueva versión</div>
			<div className="text-description">
				Te recomendamos actualizar la página para ver la versión más reciente.
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={117}
					height={39}
					onClick={() => refreshAction()}
				>
					Recargar
				</Button>
			</div>
		</div>
	);
};

export default RefreshNotification;
