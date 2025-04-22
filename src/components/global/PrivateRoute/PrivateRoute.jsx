import { shallowEqual, useSelector } from "react-redux";
// routes
import { Navigate } from "react-router";

const PrivateRoute = ({ component : Component, ...rest }) => {
	const { loggedIn } = useSelector((state) => state.authSlice, shallowEqual);

	return loggedIn
		? <Component {...rest} />
		: <Navigate to="/error/401" replace={true} />;
};

export default PrivateRoute;
