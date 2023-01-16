import { lazy }                        from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
// layouts
import DashboardLayout from "core/layout";
// components
import { Loadable }   from "core/components";
import { GuestRoute } from "components/global";

// //Auth
const Login = Loadable(lazy(() => import("pages/auth/Login")));
// // Dashboard
const WorkSpace = Loadable(lazy(() => import("pages/dashboard/WorkSpace")));
// //Erros
const NotFound  = Loadable(lazy(() => import("pages/Page404")));
const Forbidden = Loadable(lazy(() => import("pages/Page403")));
const Page500   = Loadable(lazy(() => import("pages/Page500")));

const Router = () => {
	return useRoutes([
		//Auth Routes
		{
			path     : "auth",
			element  : <GuestRoute component={Outlet} />,
			children : [
				{
					index   : true,
					element : <Navigate to="/auth/login" replace />,
				},
				{
					path    : "login",
					element : <Login />,
				},
				{ path : "*", element : <Navigate to="/auth/login" replace />},
			],
		},
		// Auth DashBoard
		{
			path     : "dashboard",
			element  : <DashboardLayout />,
			children : [
				{ element : <Navigate to="/dashboard/front" replace />, index : true },
				{ path : ":pageId", element : <WorkSpace /> },
			],
		},
		// Redirect
		{
			path    : "/",
			element : <Navigate to="dashboard" replace />,
		},
		{
			path     : "*",
			children : [
				{ path : "500", element : <Page500 /> },
				{ path : "404", element : <NotFound /> },
				{ path : "403", element : <Forbidden /> },
				{ path : "*", element : <Navigate to="/404" replace /> },
			],
		},
	]);
};

export default Router;
