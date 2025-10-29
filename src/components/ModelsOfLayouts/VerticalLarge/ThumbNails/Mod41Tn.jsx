import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";

const Mod41Tn = () => {
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
				<Stack
					w="49%"
					p="0%"
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
				</Stack>
				<Stack
					padding="0%"
					w="49%"
					h="1%"
					align="flex-start"
					justify="flex-start"
				>
					<DividerLayout
						long={"20%"}
						position="h"
						weight={"0.015em"}
					/>
				</Stack>
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

export default Mod41Tn;
