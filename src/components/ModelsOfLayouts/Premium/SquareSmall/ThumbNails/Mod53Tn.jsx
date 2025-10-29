import { Flex, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod52Tn = () => {
	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				sx={{overflow : "hidden", textTransform : "uppercase"}}
				w="50%"
			>
				<TextShell.BodyIndices align="center" />
			</Stack>
		</Flex>
	);
};

export default Mod52Tn;
