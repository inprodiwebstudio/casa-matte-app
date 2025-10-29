import { Center, Flex, Stack } from "@mantine/core";
import DividerLayout           from "components/LayoutHandler/DividerLayout";
import { TextShell }           from "core/components";
//Own components

const Mod48Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="50%"
				mah="80%"
				spacing={"0.2em"}
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={"0.1em"}
					w="100%"
				>
					<TextShell.Title width="100%" align="center" />
					<Center>
						<DividerLayout long="0.4em" position="v" />
					</Center>
				</Stack>
				<TextShell.BodyIndices align="center" />
			</Stack>
		</Flex>
	);
};

export default Mod48Tn;
