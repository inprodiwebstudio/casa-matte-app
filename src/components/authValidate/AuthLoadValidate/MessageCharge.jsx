import { Stack, Text } from "@mantine/core";


const MessageCharge = () => {
	return (
		<Stack
			spacing="2px"
			align="center"
		>
			<Text
				color="darkCasaMatte.6"
				weight={300}
				sx={{
					letterSpacing : "4px",
				}}
			>
				VALIDANDO AUTENTIFICACIÓN...
			</Text>
		</Stack>
	);
};

export default MessageCharge;
