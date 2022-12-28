
//Own components
import { BarLoader } from "react-spinners";
import "./MutationSpinner.scss";

const MutationSpinner = () => {
	return (
		<div className="MutationSpinner">
			<BarLoader
				color={"#B2AFA6"}
				loading={true}
				size={10}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default MutationSpinner;
