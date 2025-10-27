import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod41Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			p="4%"
			pb="3%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				w="40%"
			>
				<Stack
					spacing={"0.2em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="100%" align="center" />
					</div>
					<div>
						<TextShell.BodyIndices align="center" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod41Tn;
