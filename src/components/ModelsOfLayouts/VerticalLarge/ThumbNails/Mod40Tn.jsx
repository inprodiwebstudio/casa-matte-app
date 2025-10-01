import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";

const Mod40Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
		>
			<Stack
				w="100%"
				justify="flex-end"
				align="flex-end"
				spacing="0.15em"
			>
				<DividerLayout
					long={"15%"}
					position="h"
					weight={"0.015em"}
				/>
				<Stack
					spacing={"0.05em"}
					w="100%"
					justify="flex-end"
					align="flex-end"
				>
					<TextShell.Body width="50%" align="flex-end" />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod40Tn;
