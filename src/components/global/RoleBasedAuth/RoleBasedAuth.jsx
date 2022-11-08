import { shallowEqual, useSelector } from "react-redux";
import { Navigate }                  from "react-router";

import { isValidArray }    from "helpers";
import { PATH_ERROR_PAGE } from "routes/paths";

const RoleBasedAuth = ({ component : Component, requiredRoles }) => {
	//it means that all roles have access
	if (!isValidArray(requiredRoles)) return <Component />;

	const { role } = useSelector( (state) => state.authSlice.user, shallowEqual);

	const userHasRequiredRole = requiredRoles.includes(role);

	return userHasRequiredRole ?
		<Component />
		:
		<Navigate to={PATH_ERROR_PAGE.page403} />;
};

export default RoleBasedAuth;
