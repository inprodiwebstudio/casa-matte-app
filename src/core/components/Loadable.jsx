import { Suspense } from "react";
// components
import { LoadingScreen } from "core/components";

const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default Loadable;
