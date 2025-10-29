import { Flex, Stack } from "@mantine/core";
//Own components
import { TextShell } from "core/components";


const Mod32Tn = () => {

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				miw="30%"
			>
				<div
					style={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.BodyIndices align="center" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod32Tn;
