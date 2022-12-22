
//Own components
import { ClockLoader } from "react-spinners";
import "./ChargeSpinner.scss";

const ChargeSpinner = () => {
	return (
		<div className="ChargeSpinner">
			<ClockLoader
				color={"#B2AFA6"}
				loading={true}
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
			<h5>
				Cargando galería...
			</h5>
		</div>
	);
};

export default ChargeSpinner;
