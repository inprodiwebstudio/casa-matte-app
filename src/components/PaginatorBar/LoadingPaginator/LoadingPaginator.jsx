//ComponentsCore
import { BoxLoading } from "core/components";
import "./LoadingPaginator.scss";

const LoadingPaginator = () => {
	const arrayBox = new Array(10).fill(" ");

	return (
		arrayBox.map((box, index) => (
			<div className="LoadingPaginator" key={index}>
				<BoxLoading width={134.05} height={75.41} />
			</div>
		))
	);
};

export default LoadingPaginator;
