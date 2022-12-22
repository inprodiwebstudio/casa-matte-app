
//Own components
import { SquareLoader } from "react-spinners";
import "./ChargeSpinner.scss";

const ChargeSpinner = () => {
	return (
		<div className="ChargeSpinner">
			<SquareLoader
				color={"#B2AFA6"}
				loading={true}
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
			<h5>
				Tu galería esta cargando.
				Espera un momento ...
			</h5>
		</div>
	);
};

export default ChargeSpinner;
