import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod52Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing="0.2em"
				sx={{overflow : "hidden"}}
				w="23%"
			>
				<Stack
					spacing={"0.1em"}
				>
					<TextShell.TitleSmall width="100%" align="left" />
					<DividerLayout long="20%" position="h" />
				</Stack>
				<TextShell.BodyIndices align="left" />
			</Stack>
		</Flex>
	);
};

export default Mod52Tn;
