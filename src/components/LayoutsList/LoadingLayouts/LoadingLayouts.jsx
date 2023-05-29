//ComponentsCore
import { BoxLoading } from "core/components";

const LoadingLayouts = () => {
	const arrayBox = new Array(15).fill(" ");

	return (
		arrayBox.map((box, index) => (
			<BoxLoading key={index} width={166.88} height={95} />
		))
	);
};

export default LoadingLayouts;
