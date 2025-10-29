import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod33Tn = () => {

	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<TextShell.Title />
			</Stack>
		</Center>
	);
};

export default Mod33Tn;
