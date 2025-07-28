const errorPages = {
	"404" : {
		code    : "404",
		title   : "Recurso no encontrado",
		message : "Lo sentimos, el recurso que buscas no existe.",
	},
	"401" : {
		code    : "401",
		title   : "Acceso no autorizado",
		message : "Lo sentimos, no tienes permiso para acceder a este recurso. Por favor, inicia sesión.",
	},
	"403" : {
		code    : "403",
		title   : "No autorizado",
		message : "No cuentas con permiso para acceder a este recurso.",
	},
	"500" : {
		code    : "500",
		title   : "Error en conexión",
		message : "Lo sentimos, ha ocurrido un error en la conexión. Por favor, recarga o intenta más tarde.",
	},
};

export default errorPages;
