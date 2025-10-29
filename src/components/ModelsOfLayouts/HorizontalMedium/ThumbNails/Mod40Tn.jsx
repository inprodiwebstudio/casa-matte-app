import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod40Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			p="4%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing={"0.2em"}
				w="20%"
			>
				<Stack
					spacing={"0.13em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="100%" align="left" />
					</div>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.13em"}
				>
					<div>
						<TextShell.TitleSmall width="100%" align="left" />
					</div>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.13em"}
				>
					<div>
						<TextShell.TitleSmall width="100%" align="left" />
					</div>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod40Tn;
