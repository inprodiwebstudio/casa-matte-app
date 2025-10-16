import { Stack } from "@mantine/core";

const FillCircle = ({children}) => {
	return (
		<Stack
			w="25px"
			h="25px"
			style={{
				background   : "#58595b",
				color        : "white",
				borderRadius : "50%",
			}}
			justify="center"
			align="center"
		>
			{children}
		</Stack>
	);
};

export default FillCircle;
