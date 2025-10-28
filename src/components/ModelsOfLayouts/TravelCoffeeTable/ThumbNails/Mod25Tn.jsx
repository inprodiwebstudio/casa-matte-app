import { Flex, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";


const Mod25Tn = () => {

	return (
		<Flex
			w="100%"
			h="100%"
			p="15%"
			pl="25%"
			pr="25%"
			justify="center"
			align="center"
		>
			<Stack
				w="100%"
				h="100%"
				spacing={"0.2em"}
				justify="center"
			>
				<Stack
					justify="flex-start"
					align="flex-start"
					w="100%"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.Title align="flex-start" />
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

export default Mod25Tn;
