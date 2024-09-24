import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, { size, gapSpacing }) => ({
	editText : {
		fontFamily     : "Helvetica, sans-serif",
		height         : "100% !important",
		width          : "100% !important",
		display        : "flex",
		flexDirection  : "column",
		justifyContent : "space-between",
		paddingBottom  : 0,

		"& .ck.ck-editor__editable_inline" : {
			display       : gapSpacing && "flex",
			flexDirection : gapSpacing && "column",
			gap           : gapSpacing,
		},

		"& .ck.ck-editor__editable_inline > *:last-child" : {
			marginBottom : "0px !important",
		},

		"& .ck.ck-editor__editable_inline > *:first-child" : {
			marginTop : "0px !important",
		},

		"& .ck-editor__editable_inline p" : {
			fontSize : size,
		},

		"& span" : {
			fontSize : size,
		},

		"& .ck-content" : {
			height      : "100% !important",
			padding     : "0px !important",
			border      : "1px solid #b6b4af !important",
			marginLeft  : "0px !important",
			marginRight : "0px !important",
			boxShadow   : "none !important",
		},

		"& .ck-focused" : {
			border : "1px solid rgb(100, 211, 9) !important",
		},

		"& .ck-dropdown" : {
			background : theme.colors.secondaryColor, // Reemplaza con tu variable
		},

		"& .ck-list__item .ck-button.ck-on" : {
			background : theme.colors.primaryColor, // Reemplaza con tu variable
		},

		"& .ck-button_with-text" : {
			justifyContent : "left !important",
		},

		"& .ck-button" : {
			fontSize  : "9px !important",
			"&.ck-on" : {
				background : "rgba(100, 93, 93, 0.126) !important",
				color      : theme.colors.darkColor, // Reemplaza con tu variable
				border     : "none !important",
				"&:hover"  : {
					background : theme.colors.primaryColor, // Reemplaza con tu variable
				},
				"&:active, &:focus, &:active:focus" : {
					boxShadow : "none !important",
				},
			},
			"&.ck-off" : {
				border                        : "none !important",
				"&.ck-color-grid__tile:hover" : {
					boxShadow : "inset 0 0 0 1px rgb(255, 255, 255), 0 0 0 2px " + theme.colors.primaryColor + " !important",
					cursor    : "pointer",
				},
				"&:active, &:focus, &:active:focus" : {
					boxShadow : "none !important",
				},
			},
		},

		"& .button-container" : {
			width         : "100%",
			display       : "flex",
			flexDirection : "row-reverse",
			paddingRight  : "20px",
		},
	},
}));

export default useStyles;
