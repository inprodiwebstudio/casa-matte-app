import { Center, Flex, Stack } from "@mantine/core";
import DividerLayout           from "components/LayoutHandler/DividerLayout";
import { TextShell }           from "core/components";
//Own components

const Mod45Tn = () => {
	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={"50%"}
				mah="80%"
				spacing={"0.3em"}
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={"0.2em"}
					w="100%"
				>
					<TextShell.Title width="100%" align="left" />
					<Center>
						<DividerLayout
							long="0.4em"
							position="h"
							weight={"0.01em"}
						/>
					</Center>
				</Stack>
				<div>
					<TextShell.BodyIndices align="center" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod45Tn;
