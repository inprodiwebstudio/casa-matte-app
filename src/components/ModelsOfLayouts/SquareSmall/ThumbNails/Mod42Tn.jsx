import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod42Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="60%"
				aria-hidden={true}
			>
				<TextShell.Body align="center" />
			</Stack>
		</Center>
	);
};

export default Mod42Tn;
