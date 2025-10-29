import { Center, Stack } from "@mantine/core";
import { TextShell }     from "core/components";

const Mod43Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				w="40%"
				p="0%"
				spacing={"0.1em"}
			>
				<TextShell.SubTitle width="50%" align="flex-start" />
				<TextShell.BodyParagraph align="flex-start" />
			</Stack>
		</Center>
	);
};

export default Mod43Tn;
