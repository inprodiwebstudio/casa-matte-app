
export const theme = {
	primaryColor : "whiteCasaMatte",
	colors       : {
		darkCasaMatte  : [ "#d3d3d3", "#bcbcbc", "#a6a6a6", "#909090", "#7a7a7a", "#636363", "#4d4d4d", "#0f0f0f", "#000000", "#000000" ],
		whiteCasaMatte : [ "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#efefef", "#dfdfdf", "#cfcfcf" ],
	},
	lineHeight : "155%",
	components : {
		Input : {
			variants : {
				default : (theme) => ({
					input : {
						backgroundColor : theme.colorScheme === "dark" ? undefined: theme.colors.gray[0],
					},
				}),
			},
		},
		Text : {
			defaultProps : () => ({
				weight : 500,
				color  : "darkCasaMatte",
			}),
		},
		Button : {
			defaultProps : () => ({
				pb : 2,
			}),
		},
		Badge : {
			defaultProps : (theme) => ({
				variant : theme.colorScheme === "dark" ? "filled" : "outline",
				fw      : 600,
			}),
		},
		Avatar : {
			defaultProps : (theme) => ({
				variant : theme.colorScheme === "dark" ? "filled" : "light",
			}),
		},
		Pagination : {
			defaultProps : () => ({
				size : "sm",
			}),
			styles : () => ({
				control : {
					width      : 28,
					height     : 28,
					fontWeight : 600,
				},
			}),
		},
		Menu : {
			defaultProps : () => ({
				shadow     : "sm",
				transition : "scale-y",
			}),
			styles : (theme) => ({
				label : {
					fontWeight : 500,
					fontSize   : 13,
					lineHeight : "155%",
					color      : theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[6],
				},
				itemLabel : {
					fontSize   : theme.fontSizes.md,
					fontWeight : 500,
					color      : theme.colorScheme === "dark" ? "white" : "black",
				},
				itemIcon : {
					color : theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
				},
				dropdown : {
					minWidth : 150,
				},
			}),
		},
	},
};
