import { Center, Stack } from "@mantine/core";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { TextShell }     from "core/components";

const Mod42Tn = () => {
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
				<Stack
					w="100%"
					justify="flex-start"
					justifySelf="flex-start"
					spacing={"0.1em"}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout long="20%" position="h" />
				</Stack>
				<TextShell.BodyParagraph align="flex-start" />
			</Stack>
		</Center>
	);
};

export default Mod42Tn;
