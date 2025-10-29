import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod41Tn = () => {
	return (
		<Flex
			pr="9%"
			pb="9%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
		>
			<Stack
				w="50%"
				mah="75%"
				spacing="0.17em"
				aria-hidden
				sx={{
					overflow : "hidden !important",
				}}
			>
				<Flex
					direction="column"
					gap={"0.1em"}
					justify="flex-start"
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
					<DividerLayout
						long={"15%"}
						position="h"
					/>
				</Flex>
				<Flex
					justify="flex-start"
					direction="column"
					sx={{
						overflow : "hidden !important",
					}}
				>
					<TextShell.BodyParagraph align="flex-start" />
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod41Tn;
