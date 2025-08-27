import { lazy }                from "react";
import { useRoutes, Navigate } from "react-router-dom";
//Helpers

// layouts
import CorrectAccessGuard from "components/global/CorrectAccessGuard";
// components
import { Loadable } from "core/components";
// import { useAppVersionChecker } from "helpers/Hooks/useAppVersionChecker";
// import { openContextModal } from "@mantine/modals";

// // Dashboard
const WorkSpace = Loadable(lazy(() => import("pages/dashboard/WorkSpace")));
const LayoutsNotFound = Loadable(lazy(() => import("pages/NotFoundLayouts")));
const AuthValidate = Loadable(lazy(() => import("pages/AuthValidate")));
const PrivateRoute = Loadable(lazy(() => import("components/global/PrivateRoute")));
const PrivateAdminRoute = Loadable(lazy(() => import("components/global/PrivateAdminRoute")));
const SearchPhotoBook = Loadable(lazy(() => import("pages/SearchPhotoBook")));
// //Erros
const ErrorPage = Loadable(lazy(() => import("pages/ErrorPage")));

const Router = () => {
	// const { hasUpdate } = useAppVersionChecker();

	
	// useEffect(() => {
	// 	if (hasUpdate) {
	// 		openContextModal({
	// 			modal      : "refreshNotification",
	// 			innerProps : {},
	// 		});
	// 	}
	// }, [hasUpdate]);

	return useRoutes([
		// Auth DashBoard
		{
			path     : "dashboard",
			element  : <PrivateRoute component={CorrectAccessGuard} />,
			children : [
				{
					path    : ":postId",
					element : <WorkSpace />,
				},
			],
		},
		{
			path    : "auth-validate",
			element : <AuthValidate />,
		},
		{
			path    : "admin",
			element : <PrivateAdminRoute component={SearchPhotoBook} />,
		},
		{
			path     : "order",
			children : [
				{
					element : <Navigate to="/order/inProcess" replace />,
					index   : true,
				},
				{
					path    : "inProcess",
					element : <div>Tu pedido se encuentra en proceso</div>,
				},
			],
		},
		{
			path     : "notfound",
			children : [
				{
					element : <Navigate to="/notfound/layouts" replace />,
					index   : true,
				},
				{
					path    : "layouts",
					element : <LayoutsNotFound />,
				},
			],
		},
		// Redirect
		{
			path    : "/",
			element : <Navigate to="dashboard" replace />,
		},
		//Error Pages
		{
			path     : "error",
			children : [
				{ path : "500", element : <ErrorPage codeError="500" /> },
				{ path : "404", element : <ErrorPage codeError="404" /> },
				{ path : "403", element : <ErrorPage codeError="403" /> },
				{ path : "401", element : <ErrorPage codeError="401" /> },
			],
		},
	]);
};

export default Router;
