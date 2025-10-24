import { Box, Flex, Group, Stack } from "@mantine/core";
import DividerLayout               from "components/LayoutHandler/DividerLayout";
import { TextShell }               from "core/components";
//Own components

const Mod46Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="90%"
				mah="70%"
				spacing={"0.1em"}
				aria-hidden
				sx={{ overflow : "hidden" }}
			>
				<Flex
					direction="column"
					gap={"0.1em"}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long={"10%"} position="h" />
				</Flex>
				<Group
					position="apart"
					align="flex-start"
					spacing={0}
					sx={{ overflow : "hidden" }}
				>
					<Box w="48%">
						<TextShell.BodyParagraph width="100%" align="flex-start" />
					</Box>
					<Box w="48%">
						<TextShell.BodyParagraph width="100%" align="flex-start" />
					</Box>
				</Group>
			</Stack>
		</Flex>
	);
};

export default Mod46Tn;
