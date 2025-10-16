import { Radio } from "@mantine/core";

const HidePhotosCheck = () => {
	return (
		<Radio
			labelPosition="left"
			label="Ocultar fotos usadas"
			size="xs"
			styles={{
				label : {
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					fontSize      : "10px",
					paddingRight  : "4px !important",
				},
				radio : {
					marginRight : "0px !important",
					"&:checked" : {
						borderColor : "#58595b",
						background  : "#58595b",
					},
				},
			}}
		/>
	);
};

export default HidePhotosCheck;
