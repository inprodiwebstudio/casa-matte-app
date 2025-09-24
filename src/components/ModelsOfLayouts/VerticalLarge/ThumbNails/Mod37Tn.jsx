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
			>
				<TextShell.Title />
				<TextShell.SubTitle />
			</Stack>
		</Center>
	);
};

export default Mod37Tn;
