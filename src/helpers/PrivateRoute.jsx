import { useEffect }   from "react";
import { connect }     from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({
	loggedIn,
	component : Component,
	render    : RenderComponent,
	...rest
}) => {
	const navigate = useNavigate();

	const handleRedirectLogin = () => {
		if (loggedIn) return;
		navigate("/auth/login");
	};

	useEffect(() => {
		handleRedirectLogin();
	}, [loggedIn]);

	return RenderComponent
		? <RenderComponent {...rest} />
		: <Component {...rest} />;
};

const mapStateToProps = ({ authSlice }) => ({
	loggedIn : authSlice?.loggedIn ?? false,
});

export default connect(mapStateToProps)(PrivateRoute);
