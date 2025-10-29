import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod19Tn = () => {

	return (
		<Center
			w="100%"
			h="100%"
			p={"4%"}
		>
			<Stack
				w="80%"
				sx={{
					overflow      : "hidden",
					textTransform : "uppercase !important",
				}}
				spacing="0"
			>
				<TextShell.Title align="center" width="60%" />
				<TextShell.Title align="center" width="30%" />
			</Stack>
		</Center>
	);
};

export default Mod19Tn;
