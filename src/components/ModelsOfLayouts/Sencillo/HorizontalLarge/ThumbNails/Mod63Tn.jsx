import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod62Tn = () => {
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
				spacing="4px"
				miw="16%"
				w={"20%"}
			>
				<Stack
					spacing={"0.1em"}
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
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
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
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
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
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

export default Mod62Tn;
