import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod53Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing={"0.1em"}
				w="24%"
				sx={{ textTransform : "uppercase", overflow : "hidden" }}
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

export default Mod53Tn;
