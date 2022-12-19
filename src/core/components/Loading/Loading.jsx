
//Own components
import { BarLoader } from "react-spinners";
import "./Loading.scss";

const Loading = () => {
	return (
		<div className="Loading">
			<BarLoader
				color={"#B2AFA6"}
				loading={true}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
			<h5>Subiendo Fotos...</h5>
		</div>
	);
};

export default Loading;
