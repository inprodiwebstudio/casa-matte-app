/* eslint-disable import/no-extraneous-dependencies */
import { showNotification } from "@mantine/notifications";

const PostingConfig = ({
	"post" : {
		"posting" : () => (
			showNotification({
				id      : "postingData",
				title   : "",
				message : "Guardando Cambios.",
				loading : true,
				styles  : () => ({
					root : {
					  "&::before" : {
						  borderRadius : "0px",
						  width        : "3px",
					  },
					  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			})
		),
		"200" : () => (
			showNotification({
				id      : "postingData",
				title   : "",
				message : "Cambios Guardados",
				color   : "green",
				loading : false,
				styles  : () => ({
					root : {
					  "&::before" : {
						  borderRadius : "0px",
						  width        : "3px",
					  },
					  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			})
		),
		"403" : () => (
			showNotification({
				// id      : "postingData",
				title   : "Sesion expirada.",
				message : "Tu sesión ha expirado. Inicia sesión de nuevo.",
				color   : "yellow",
				styles  : () => ({
					root : {
					  "&::before" : {
						  borderRadius : "0px",
						  width        : "3px",
					  },
					  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			})
		),
		"500" : () => (
			showNotification({
				// id      : "postingData",
				title   : "Ocurrió un problema.",
				message : "Tus cambios no han sido guardados. Intenta más tarde.",
				color   : "red",
				styles  : () => ({
					root : {
					  "&::before" : {
						  borderRadius : "0px",
						  width        : "3px",
					  },
					  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			})
		),
	},
	"get" : {
		"404" : () => (
			showNotification({
				id      : "Not Found PostId",
				title   : "PhotoBook Invalido",
				message : "El photoBook no existe o es incorrecto. Selecciona nuevamente el photobook a personalizar",
				color   : "red",
				styles  : () => ({
					root : {
					  "&::before" : {
						  borderRadius : "0px",
						  width        : "3px",
					  },
					  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			})
		),
	},
});

export default PostingConfig;
