import { Flex, Stack } from "@mantine/core";
//Own components
import DividerLayout from "components/LayoutHandler/DividerLayout";
import { TextShell } from "core/components";


const Mod24Tn = () => {

	return (
		<Flex
			w="100%"
			h="100%"
			p="10%"
			justify="flex-end"
		>
			<Stack
				w="60%"
				h="100%"
				spacing={"0.3em"}
				justify="flex-end"
			>
				<Stack
					spacing={"0.1em"}
					justify="flex-start"
					align="flex-start"
					w="100%"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.Title align="flex-start" />
					<DividerLayout long="10%" position="h" />
				</Stack>
				<Stack
					w="100%"
				>
					<TextShell.BodyParagraph />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod24Tn;
