import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod45Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="43%"
				mah="70%"
				spacing={"0.2em"}
				aria-hidden
			>
				<Flex
					direction="column"
					gap={"0.1em"}
					justify="center"
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long="10%" position="h" />
				</Flex>
				<Flex
					justify="flex-start"
					direction="column"
				>
					<TextShell.BodyParagraph align="flex-start" />
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod45Tn;
