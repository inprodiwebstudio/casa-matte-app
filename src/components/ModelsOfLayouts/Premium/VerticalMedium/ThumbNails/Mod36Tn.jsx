import {  Flex, Stack } from "@mantine/core";
import { TextShell }    from "core/components";
//Own components

const Mod36Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			pr="9%"
			pb="7%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="90%"
				mah="120px"
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					w={"100%"}
					h="fit-content"
					align={"flex-end"}
				>
					<TextShell.Title width="80%" align="flex-end" />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod36Tn;
