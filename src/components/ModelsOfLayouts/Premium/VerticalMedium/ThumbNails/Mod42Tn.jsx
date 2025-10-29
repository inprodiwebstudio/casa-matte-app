import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod42Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="54%"
				mah="70%"
				spacing="0.15em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap="0px"
					justify="flex-start"
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long="20%" position="h" />
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

export default Mod42Tn;
