import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";

const Mod47Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify={"flex-end"}
		>
			<Stack
				w="40%"
				p="8%"
				spacing={"0.2em"}
				align="center"
				justify="center"
			>
				<Stack
					w="100%"
					spacing={"0.1em"}
				>
					<TextShell.Title width="100%" align="flex-start" />
					<DividerLayout long="0.3em" position="h" />
					<TextShell.BodyIndices align="flex-start" width="70%" />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod47Tn;
