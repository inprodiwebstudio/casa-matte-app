import { createStyles } from "@mantine/core";

const useStyles = createStyles(
	(
		theme,
		{
			size,
			gapSpacing,
			lineHeight,
			letterSpacing,
			gravingColor,
			layoutNo,
		}
	) => ({
		editText : {
			fontFamily     : "Helvetica, sans-serif",
			flexDirection  : "column",
			justifyContent : "space-between",
			display        : !size ? "none" : "flex",
			position       : "relative", // necesario para handles absolutos
			border         : "2px dashed transparent", // bounding box azul

			"& .action-delete" : {
				position       : "absolute",
				top            : -37,
				right          : 0,
				zIndex         : 3,
				width          : "100%",
				display        : "flex",
				justifyContent : "flex-end",
				opacity        : 0,
			},

			"&:hover" : {
				border : "2px dashed #3b82f6",

				"& .action-delete" : {
					opacity : 1,
				},
			},

			"& .ck.ck-editor__editable_inline" : {
				display       : gapSpacing ? "flex" : "block",
				flexDirection : gapSpacing ? "column" : "initial",
				gap           : gapSpacing || 0,
				lineHeight    : lineHeight ?? "auto",
				letterSpacing : letterSpacing ?? "0.6px !important",
				overflow      : "hidden !important",
				width         : "100% !important",
				height        : "100% !important",
				paddingBottom : "0px !important",
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
				...(gravingColor && { color : gravingColor }),
				height      : "100% !important",
				padding     : "0px !important",
				border      : "1px solid transparent !important",
				marginLeft  : "0px !important",
				marginRight : "0px !important",
				boxShadow   : "none !important",
			},

			"& .ck-focused" : {
				border : "1px solid rgb(85, 121, 248) !important",
			},

			"& .ck-dropdown" : {
				background : theme.colors.secondaryColor,
			},

			"& .ck-list__item .ck-button.ck-on" : {
				background : theme.colors.primaryColor,
			},

			"& .ck-button_with-text" : {
				justifyContent : "left !important",
			},

			"& .ck-button" : {
				fontSize  : "9px !important",
				"&.ck-on" : {
					background : "rgba(100, 93, 93, 0.126) !important",
					color      : theme.colors.darkColor,
					border     : "none !important",
					"&:hover"  : {
						background : theme.colors.primaryColor,
					},
					"&:active, &:focus, &:active:focus" : {
						boxShadow : "none !important",
					},
				},
				"&.ck-off" : {
					border                        : "none !important",
					"&.ck-color-grid__tile:hover" : {
						boxShadow : `inset 0 0 0 1px #fff, 0 0 0 2px ${theme.colors.primaryColor} !important`,
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

			/* ==== HANDLES CON PSEUDO ELEMENTOS ==== */
			"&::before, &::after" : {
				content      : "''",
				position     : "absolute",
				width        : "10px",
				height       : "10px",
				background   : "transparent",
				border       : "2px solid transparent",
				borderRadius : "50%",
				zIndex       : 2,
			},

			"&:hover::before, &:hover::after" : {
				background : "#fff",
				border     : "2px solid #3b82f6",
			},

			/* esquina superior izquierda */
			"&::before" : {
				top  : "-6px",
				left : "-6px",
			},

			/* esquina superior derecha */
			"&::after" : {
				top   : "-6px",
				right : "-6px",
			},

			/* contenedor auxiliar para más handles */
			"& .handles::before, & .handles::after" : {
				content      : "''",
				position     : "absolute",
				width        : "10px",
				height       : "10px",
				background   : "transparent",
				border       : "2px solid transparent",
				borderRadius : "50%",
				zIndex       : 2,
			},

			"&:hover .handles::before, &:hover .handles::after" : {
				background : "#fff",
				border     : "2px solid #3b82f6",
			},

			/* esquina inferior izquierda */
			"& .handles::before" : {
				bottom : "-6px",
				left   : "-6px",
			},

			/* esquina inferior derecha */
			"& .handles::after" : {
				bottom : "-6px",
				right  : "-6px",
			},

			[`& .handles-${layoutNo}`] : {
				cursor     : "move",
				fontSize   : "35px",
				fontWeight : "bold",
				color      : "transparent",
				marginTop  : "-22.5px",
			},

			[`&:hover .handles-${layoutNo}`] : {
				color : "#3b82f6",
			},

			/* handles de los lados (extra div para cubrir 4 más) */
			"& .handles span::before, & .handles span::after" : {
				content      : "''",
				position     : "absolute",
				width        : "10px",
				height       : "10px",
				background   : "#fff",
				border       : "2px solid #3b82f6",
				borderRadius : "50%",
				zIndex       : 2,
			},

			/* lado superior medio */
			"& .handles span::before" : {
				top       : "-6px",
				left      : "50%",
				transform : "translateX(-50%)",
			},

			/* lado inferior medio */
			"& .handles span::after" : {
				bottom    : "-6px",
				left      : "50%",
				transform : "translateX(-50%)",
			},
		},
	})
);

export default useStyles;
