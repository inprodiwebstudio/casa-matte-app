import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod39Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			p="4%"
			pb="5%"
			justify="flex-end"
			align="flex-end"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing={"0.3em"}
				w="22%"
			>
				<Stack
					spacing={"0.1em"}
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
					spacing={"0.1em"}
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
					spacing={"0.1em"}
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

export default Mod39Tn;
