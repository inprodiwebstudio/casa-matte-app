import { Center, Stack } from "@mantine/core";
import { TextShell }     from "core/components";
//Own components

const Mod35Tn = () => {
	return (
		<div
			style={{
				width  : "100%",
				height : "100%",
			}}
		>
			<Center w="100%" h="100%">
				<Stack
					w="70%"
					p="0%"
					pt="0%"
					pb="0%"
				>
					<TextShell.Title />
				</Stack>
			</Center>
		</div>
	);
};

export default Mod35Tn;
