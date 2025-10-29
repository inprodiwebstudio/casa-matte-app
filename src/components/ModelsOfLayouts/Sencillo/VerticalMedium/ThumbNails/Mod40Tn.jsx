import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod40Tn = () => {
	return (
		<Flex
			p="9%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.15em"
			direction="column"
		>
			<DividerLayout
				long={"10%"}
				position="h"
				weight={"0.01em"}
			/>
			<Stack w="50%">
				<TextShell.Body align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod40Tn;
