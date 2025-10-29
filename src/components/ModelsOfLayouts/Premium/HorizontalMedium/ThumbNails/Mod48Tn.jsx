import { Box, Flex, Group, Stack } from "@mantine/core";
import DividerLayout               from "components/LayoutHandler/DividerLayout";
import { TextShell }               from "core/components";

const Mod48Tn = () => {
	return (
		<Flex
			pl="23%"
			pr="23%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="100%"
				mah="90%"
				spacing={"0.2em"}
				aria-hidden
				sx={{ overflow : "hidden" }}
			>
				<Flex
					direction="column"
					gap={"0.2em"}
					style={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long="10%" position="h" />
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

export default Mod48Tn;
