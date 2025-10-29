import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod64Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			p="10%"
			pl="30%"
			pr="30%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0em"
				w={"100%"}
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
						<TextShell.TitleSmall width="30%" align="center" />
					</div>
					<div>
						<TextShell.BodyIndices width="20%" align="center" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod64Tn;
