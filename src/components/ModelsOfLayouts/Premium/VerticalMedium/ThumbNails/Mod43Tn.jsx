import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";
//Own components

const Mod43Tn = () => {
	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={"50%"}
				mah="90%"
				spacing={"0.2em"}
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<div>
					<TextShell.SubTitle width="50%" align="flex-start" />
				</div>
				<div>
					<TextShell.BodyParagraph align="flex-start" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod43Tn;
