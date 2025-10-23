import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod45Tn = () => {
	return (
		<Flex
			p="8%"
			pb={"8%"}
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="52%"
				mah="70%"
				spacing={"0.15em"}
				aria-hidden
			>
				<Flex
					direction="column"
					gap={"0.15em"}
					justify="center"
				>
					<div
						style={{
							width : "100%",
						}}
					>
						<TextShell.SubTitle width="50%" align="flex-start" />
					</div>
					<DividerLayout we={"0.01em"} long="9%" position="h" />
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

export default Mod45Tn;
