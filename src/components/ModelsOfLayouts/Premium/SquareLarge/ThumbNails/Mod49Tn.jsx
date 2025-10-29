import { Center, Flex, Stack } from "@mantine/core";
import DividerLayout           from "components/LayoutHandler/DividerLayout";
import { TextShell }           from "core/components";
//Own components

const Mod48Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="50%"
				mah="80%"
				spacing={"0.3em"}
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={"0.25em"}
					w="100%"
				>
					<TextShell.Title width="100%" align="left" />
					<Center>
						<DividerLayout
							long={"0.3em"}
							position="h"
							weight={"0.015em"}
						/>
					</Center>
				</Stack>
				<TextShell.BodyIndices align="center" />
			</Stack>
		</Flex>
	);
};

export default Mod48Tn;
