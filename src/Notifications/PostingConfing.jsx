/* eslint-disable import/no-extraneous-dependencies */
import { showNotification, updateNotification } from "@mantine/notifications";

const PostingConfig = ({
	"post" : {
		"posting" : () => (
			showNotification({
				id      : "postingData",
				title   : "Guardando Cambios.",
				message : "",
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
			updateNotification({
				id      : "postingData",
				title   : "",
				message : "Cambios Guardados",
				color   : "green",
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
});

export default PostingConfig;
