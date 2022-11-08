const path = (root, sublink) => `${root}${sublink}`;

export const ROOTS_AUTH      = "/auth";
export const ROOTS_DASHBOARD = "/dashboard";

export const PATH_ERROR_PAGE = {
	page404 : "/404",
	page403 : "/403",
	page500 : "/500",
};

export const PATH_AUTH = {
	root  : ROOTS_AUTH,
	login : path(ROOTS_AUTH, "/login"),
};

export const PATH_DASHBOARD = {
	root : ROOTS_DASHBOARD,
	home : path(ROOTS_DASHBOARD, "/home"),
	// users : {
	// 	root  : path(ROOTS_DASHBOARD, "/user"),
	// 	new   : path(ROOTS_DASHBOARD, "/user/new"),
	// 	cards : path(ROOTS_DASHBOARD, "/user/cards"),
	// 	edit  : (id) => path(ROOTS_DASHBOARD, `/user/edit/${id}`),
	// },
};
