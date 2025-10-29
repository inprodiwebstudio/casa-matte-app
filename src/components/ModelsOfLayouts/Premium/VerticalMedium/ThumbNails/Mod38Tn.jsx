import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod38Tn = () => {
	return (
		<Flex
			p="5%"
			pb="6%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.15em"
			direction="column"
		>
			<Flex
				w="100%"
				justify="flex-end"
				align="flex-end"
				mr={"0.05em"}
			>
				<DividerLayout long={"10%"} position="h" />
			</Flex>
			<Stack
				spacing={"0.05em"}
				w="100%"
			>
				<div>
					<TextShell.Title width="40%" align="flex-end" />
				</div>
				<div
					style={{
						marginRight : "0px",
					}}
				>
					<TextShell.SubTitle width="20%" align="flex-end" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod38Tn;
