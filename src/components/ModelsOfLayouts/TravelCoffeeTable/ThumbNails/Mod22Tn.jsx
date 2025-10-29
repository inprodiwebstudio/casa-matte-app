import { Flex, Stack } from "@mantine/core";
//Own components
import DividerLayout from "components/LayoutHandler/DividerLayout";
import { TextShell } from "core/components";


const Mod22Tn = () => {

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.15em"
			direction="column"
		>
			<DividerLayout long="5%" position="h" />
			<Stack
				w="70%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<TextShell.Body align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod22Tn;
