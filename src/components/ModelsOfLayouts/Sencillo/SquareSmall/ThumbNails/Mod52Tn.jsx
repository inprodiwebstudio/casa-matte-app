import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod52Tn = () => {
	return (
		<Flex
			p="10%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				spacing={"0.1em"}
				sx={{overflow : "hidden", textTransform : "uppercase"}}
				w={"30%"}
			>
				<Stack
					spacing={"0.1em"}
				>
					<TextShell.TitleSmall width="100%" align="left" />
					<DividerLayout long="19%" position="h" />
				</Stack>
				<TextShell.BodyIndices align="left" />
			</Stack>
		</Flex>
	);
};

export default Mod52Tn;
