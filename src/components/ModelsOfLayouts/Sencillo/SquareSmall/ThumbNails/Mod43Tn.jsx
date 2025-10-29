import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod43Tn = () => {
	return (
		<Flex
			pr="10%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap={"5%"}
			direction="column"
		>
			<DividerLayout
				long={"10%"}
				weight={"0.01em"}
				position="h"
			/>
			<Stack
				w="37%"
			>
				<TextShell.Body align="flex-end" />
			</Stack>
		</Flex>
	);
};

export default Mod43Tn;
