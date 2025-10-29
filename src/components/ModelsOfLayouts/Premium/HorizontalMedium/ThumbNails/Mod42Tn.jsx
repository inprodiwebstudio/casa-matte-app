import { Center, Stack } from "@mantine/core";
import { TextShell }     from "core/components";

const Mod42Tn = () => {
	return (
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
				style={{
					textTransform : "uppercase",
				}}
			>
				<TextShell.Title />
			</Stack>
		</Center>
	);
};

export default Mod42Tn;
