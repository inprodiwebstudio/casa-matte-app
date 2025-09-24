import { Flex, Stack } from "@mantine/core";

//Own components
import { TextShell } from "core/components";


const Mod36Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			p="10%"
		>
			<Stack
				w="50%"
				p="0%"
			>
				<TextShell.Title width="80%" align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod36Tn;
