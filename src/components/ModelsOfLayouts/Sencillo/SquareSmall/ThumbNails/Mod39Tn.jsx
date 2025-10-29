import { Flex, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod39Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			pb="8%"
			pr="10%"
		>
			<Stack
				w={"50%"}
				align={"flex-end"}
			>
				<TextShell.Title width="80%" align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod39Tn;
