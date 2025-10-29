import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod18Tn = () => {

	return (
		<Center
			w="100%"
			h="100%"
			pb={"4%"}
			pr={"8%"}
		>
			<Stack
				align="flex-end"
				justify="flex-end"
				w={"100%"}
				h={"100%"}
			>
				<Stack
					w="70%"
					mah={"6%"}
					sx={{
						overflow : "hidden",
					}}
				>
					<TextShell.Title align="flex-end" />
				</Stack>
			</Stack>
		</Center>
	);
};

export default Mod18Tn;
