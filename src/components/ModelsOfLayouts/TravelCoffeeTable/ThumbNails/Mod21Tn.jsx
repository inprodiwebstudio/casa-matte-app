import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod21Tn = () => {

	return (
		<Center
			w="100%"
			h="100%"
			p={"4%"}
			sx={{
				overflow : "hidden",
			}}
		>
			<Stack
				sx={{
					textTransform : "uppercase",
				}}
				w={"60%"}
			>
				<TextShell.BodyParagraph align="center" width="60%" />
			</Stack>
		</Center>
	);
};

export default Mod21Tn;
