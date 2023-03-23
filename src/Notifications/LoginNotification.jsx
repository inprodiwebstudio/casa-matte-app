/* eslint-disable import/no-extraneous-dependencies */
import { showNotification } from "@mantine/notifications";

const LoginNotification = ({
	"post" : {
		"400" : () => (
			showNotification({
				title   : "Error al iniciar sesión.",
				message : "Las credenciales son incorrectas o el usuario actualmente se encuentra desactivado.",
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
		"404" : () => (
			showNotification({
				title   : "Error al iniciar sesión.",
				message : "Nombre de usuario o contraseña incorrectos. Verifica tus credenciales.",
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
		"403" : () => (
			showNotification({
				title   : "Error al iniciar sesión.",
				message : "Nombre de usuario o contraseña incorrectos. Verifica tus credenciales.",
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
		"500" : () => (
			showNotification({
				title   : "Ocurrió un problema.",
				message : "Ocurrió un problema inesperado. Intenta más tarde.",
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
	},
});

export default LoginNotification;
