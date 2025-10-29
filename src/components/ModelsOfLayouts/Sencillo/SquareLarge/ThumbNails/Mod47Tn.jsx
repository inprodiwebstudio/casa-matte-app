import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";
//Own components

const Mod47Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="57%"
				mah="95%"
				spacing={"0.1em"}
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<TextShell.SubTitle width="35%" align="flex-start" />
				<TextShell.BodyParagraph width="100%" align="center" />
			</Stack>
		</Flex>
	);
};

export default Mod47Tn;
