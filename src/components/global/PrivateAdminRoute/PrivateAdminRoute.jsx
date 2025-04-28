import LoginCard                     from "pages/dashboard/LoginCard";
import { shallowEqual, useSelector } from "react-redux";

const PrivateAdminRoute = ({ component : Component, ...rest }) => {
	const { loggedIn } = useSelector((state) => state.authSlice, shallowEqual);
	const { username } = useSelector((state) => state.authSlice.user, shallowEqual);

	const isCorrectAccess = loggedIn && ((username === "demo") || (username === "Administrador"));

	return isCorrectAccess
		? <Component {...rest} />
		: <LoginCard />;
};

export default PrivateAdminRoute;
