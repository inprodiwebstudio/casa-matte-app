
//Own components
import { BarLoader } from "react-spinners";
import "./Loading.scss";

const Loading = () => {
	return (
		<div className="Loading">
			<BarLoader
				color={"#B2AFA6"}
				loading={true}
				size={0}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loading;
