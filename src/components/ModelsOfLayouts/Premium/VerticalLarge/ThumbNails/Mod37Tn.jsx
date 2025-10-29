import { Center, Stack } from "@mantine/core";
import { TextShell }     from "core/components";

const Mod37Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
			p="8%"
		>
			<Stack
				spacing="0.05em"
				w="100%"
				align="center"
				justify="center"
			>
				<TextShell.Title width="50%" />
				<TextShell.SubTitle width="40%" />
			</Stack>
		</Center>
	);
};

export default Mod37Tn;
