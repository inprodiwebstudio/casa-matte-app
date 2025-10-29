import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod44Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="51%"
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap={"0.1em"}
					justify="center"
				>
					<div
						style={{
							width : "100%",
						}}
					>
						<TextShell.SubTitle width="50%" align="flex-start" />
					</div>
					<DividerLayout long={"10%"} position="h" />
				</Flex>
				<Flex
					justify="flex-start"
					direction="column"
				>
					<div
						style={{
							width : "100%",
						}}
					>
						<TextShell.BodyParagraph align="flex-start" />
					</div>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod44Tn;
