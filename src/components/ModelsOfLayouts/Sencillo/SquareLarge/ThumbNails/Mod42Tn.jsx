import { Center, Stack } from "@mantine/core";
import { TextShell }     from "core/components";
//Own components

const Mod42Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				mah="70%"
				w="50%"
				aria-hidden={true}
			>
				<TextShell.Body align="left" />
			</Stack>
		</Center>
	);
};

export default Mod42Tn;
