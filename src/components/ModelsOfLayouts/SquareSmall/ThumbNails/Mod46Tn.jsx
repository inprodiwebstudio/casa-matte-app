import { Flex, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod46Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="75%"
				mah="90%"
				spacing={"0.1em"}
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<div
					style={{
						width : "100%",
					}}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
				</div>
				<div
					style={{
						width : "100%",
					}}
				>
					<TextShell.BodyParagraph align="flex-start" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod46Tn;
