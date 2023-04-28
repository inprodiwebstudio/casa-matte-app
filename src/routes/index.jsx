import { lazy }                from "react";
import { useRoutes, Navigate } from "react-router-dom";
//Helpers

// layouts
import DashboardLayout from "core/layout";
// components
import { Loadable } from "core/components";

// // Dashboard
const WorkSpace = Loadable(lazy(() => import("pages/dashboard/WorkSpace")));
// //Erros
const NotFound  = Loadable(lazy(() => import("pages/Page404")));
const Forbidden = Loadable(lazy(() => import("pages/Page403")));
const Page500   = Loadable(lazy(() => import("pages/Page500")));

const Router = () => {
	return useRoutes([
		// Auth DashBoard
		{
			path     : "dashboard",
			element  : <DashboardLayout />,
			children : [
				{
					element : <Navigate to="/dashboard/frontpage" replace />,
					index   : true,
				},
				{
					path    : ":pageId",
					element : <WorkSpace />,
				},
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
				{ path : "*", element : <Navigate to="/dashboard" replace /> },
			],
		},
	]);
};

export default Router;
