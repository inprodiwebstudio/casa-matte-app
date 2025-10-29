import { Box, Flex, Stack } from "@mantine/core";
import DividerLayout        from "components/LayoutHandler/DividerLayout";
import { TextShell }        from "core/components";

const Mod72Tn = () => {
	return (
		<Flex
			p="4%"
			w="100%"
			h="100%"
			align="flex-end"
			justify="flex-end"
		>
			<Stack
				w="31%"
				mah="100%"
				spacing={"0.1em"}
				aria-hidden
				sx={{ overflow : "hidden"}}
			>
				<Flex
					direction="column"
					gap={"0.1em"}
					w="100%"
					style={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long="13%" position="h" />
				</Flex>
				<Box w="100%">
					<TextShell.BodyParagraph width="100%" align="flex-end" />
				</Box>
			</Stack>
		</Flex>
	);
};

export default Mod72Tn;
