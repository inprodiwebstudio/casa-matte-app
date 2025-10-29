import { Flex, Stack, Center } from "@mantine/core";
//Own components
import DividerLayout from "components/LayoutHandler/DividerLayout";
import { TextShell } from "core/components";


const Mod27Tn = () => {

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
				spacing="0.3em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing="0.3em"
					w="100%"
				>
					<TextShell.Title width="100%" align="center" />
					<Center>
						<DividerLayout long="15%" position="h" />
					</Center>
				</Stack>
				<TextShell.BodyIndices align="center" />
			</Stack>
		</Flex>
	);
};

export default Mod27Tn;
