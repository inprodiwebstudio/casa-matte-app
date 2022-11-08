import { shallowEqual, useSelector } from "react-redux";
// routes
import { Navigate }        from "react-router";
import { ROOTS_DASHBOARD } from "routes/paths";
//interface

const GuestRoute = ({ component : Component }) => {
	const { loggedIn } = useSelector((state) => state.authSlice, shallowEqual);

	return loggedIn
		? <Navigate to={ROOTS_DASHBOARD} replace={true} />
		: <Component />;
};

export default GuestRoute;
