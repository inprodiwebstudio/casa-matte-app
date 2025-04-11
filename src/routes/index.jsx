import { lazy }                from "react";
import { useRoutes, Navigate } from "react-router-dom";
//Helpers

// layouts
import DashboardLayout from "core/layout";
// components
import { Loadable } from "core/components";

// // Dashboard
const WorkSpace = Loadable(lazy(() => import("pages/dashboard/WorkSpace")));
const PayConfirm = Loadable(lazy(() => import("pages/PayConfirm")));
const LayoutsNotFound = Loadable(lazy(() => import("pages/NotFoundLayouts")));
const AuthTokenValidate = Loadable(lazy(() => import("pages/AuthTokenValidate")));
// //Erros
const NotFound  = Loadable(lazy(() => import("pages/Page404")));
// const Forbidden = Loadable(lazy(() => import("pages/Page403")));
// const Page500   = Loadable(lazy(() => import("pages/Page500")));

const Router = () => {
	return useRoutes([
		// Auth DashBoard
		{
			path     : "dashboard",
			element  : <DashboardLayout />,
			children : [
				{
					element : <Navigate to="/dashboard/page1" replace />,
					index   : true,
				},
				{
					path    : ":pageId",
					element : <WorkSpace />,
				},
			],
		},
		{
			path    : "auth-validation",
			element : <AuthTokenValidate />,
		},
		{
			path     : "payment",
			children : [
				{
					element : <Navigate to="/payment/confirm" replace />,
					index   : true,
				},
				{
					path    : "confirm",
					element : <PayConfirm />,
				},
			],
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
		{ path : "404", element : <NotFound /> },
		// Redirect
		{
			path    : "/",
			element : <Navigate to="dashboard" replace />,
		},
		// {
		// 	path     : "*",
		// 	children : [
		// 		{ path : "500", element : <Page500 /> },
		// 		{ path : "404", element : <NotFound /> },
		// 		{ path : "403", element : <Forbidden /> },
		// 	],
		// },
	]);
};

export default Router;
