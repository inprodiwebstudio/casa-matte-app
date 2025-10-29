import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod47Tn = () => {
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
				miw={"30%"}
			>
				<Stack
					spacing={"0.15em"}
					aria-hidden
				>
					<Stack
						spacing={"0.15em"}
					>
						<TextShell.TitleSmall width="100%" align="left" />
						<DividerLayout long={"0.3em"} position="h" />
					</Stack>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.15em"}
					aria-hidden
				>
					<Stack
						spacing={"0.15em"}
					>
						<TextShell.TitleSmall width="100%" align="left" />
						<DividerLayout long={"0.3em"} position="h" />
					</Stack>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.15em"}
					aria-hidden
				>
					<Stack
						spacing={"0.15em"}
					>
						<TextShell.TitleSmall width="100%" align="left" />
						<DividerLayout long={"0.3em"} position="h" />
					</Stack>
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod47Tn;
