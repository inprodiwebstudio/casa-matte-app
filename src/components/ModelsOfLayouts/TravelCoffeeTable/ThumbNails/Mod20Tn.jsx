import { Center, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";

const Mod20Tn = () => {

	return (
		<Center
			w="100%"
			h="100%"
			p={"2%"}
			pb={"8%"}
		>
			<Stack
				w={"100%"}
				h={"100%"}
				align="flex-end"
				justify="flex-end"
				pr={"8%"}
			>
				<Stack
					w="80%"
					sx={{
						overflow      : "hidden",
						textTransform : "uppercase !important",
					}}
					spacing="0"
				>
					<Stack>
						<TextShell.Title align="flex-end" width="60%" />
					</Stack>
					<Stack>
						<TextShell.SubTitle align="flex-end" width="30%" />
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
};

export default Mod20Tn;
