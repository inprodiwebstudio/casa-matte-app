import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod49Tn = () => {
	return (
		<Flex
			pr="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				spacing="0.2em"
				sx={{overflow : "hidden"}}
				maw="60%"
				miw={"30%"}
			>
				<Stack
					spacing="0.14em"
				>
					<TextShell.TitleSmall width="100%" align="left" />
					<DividerLayout weight={"0.01em"} long="20%" position="h" />
				</Stack>
				<div>
					<TextShell.BodyIndices align="left" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod49Tn;
