import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod43Tn = () => {
	return (
		<Flex
			pr="10%"
			pb="7%"
			w="100%"
			h="100%"
			align="flex-end"
		>
			<Stack
				w="100%"
				align="flex-end"
				spacing={"0.2em"}
			>
				<Flex
					w="100%"
					justify="flex-end"
					mr={"0%"}
				>
					<DividerLayout
						long={"10%"}
						position="h"
						weight={"0.015em"}
					/>
				</Flex>
				<Stack w="45%">
					<TextShell.Body align="flex-end" />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod43Tn;
