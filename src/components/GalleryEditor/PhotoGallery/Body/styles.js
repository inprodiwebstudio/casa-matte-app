import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, props) => {
	return {
		photoCardBody : {
			userSelect : "none",
			cursor     : "grab",
			position   : "relative",

			"&:hover" : {
				"& .trashAction" : {
					opacity : 1,
				},

				"& .radioCheck" : {
					opacity : 1,
				},
			},

			"& .trashAction" : {
				position   : "absolute",
				top        : "5px",
				right      : "5px",
				transition : "all ease 200ms",
				opacity    : 0,
			},

			"& .checkBadge" : {
				position : "absolute",
				bottom   : "5px",
				left     : "5px",
			},

			"& .radioCheck" : {
				position : "absolute",
				top      : "5px",
				left     : "5px",
				opacity  : props.isSelectedPhoto ? 1 : 0,
			},
		},
		folderCardBody : {
			userSelect   : "none",
			borderRadius : "10px",
			position     : "relative",

			"&:hover" : {
				"& .trashAction" : {
					opacity : 1,
				},
			},

			"& .badgeTitle" : {
				position   : "absolute",
				top        : "0px",
				background : "#edeeee",
			},

			"& .trashAction" : {
				position   : "absolute",
				top        : "-5px",
				left       : "0px",
				transition : "all ease 200ms",
				opacity    : 0,
			},
		},
	};
}
);

export default useStyles;
