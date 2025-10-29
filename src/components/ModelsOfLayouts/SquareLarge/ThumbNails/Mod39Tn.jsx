import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";
//Own components

const Mod39Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			pb={"10%"}
			pr="8%"
		>
			<Stack
				w={"70%"}
				align={"flex-end"}
			>
				<TextShell.Title width="80%" align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod39Tn;
