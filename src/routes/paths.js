const path = (root, sublink) => `${root}${sublink}`;

export const ROOTS_DASHBOARD = "/dashboard";

export const PATH_ERROR_PAGE = {
	page404 : "/404",
	page403 : "/403",
	page500 : "/500",
};

export const PATH_DASHBOARD = {
	root : ROOTS_DASHBOARD,
	home : path(ROOTS_DASHBOARD, "/home"),
};
