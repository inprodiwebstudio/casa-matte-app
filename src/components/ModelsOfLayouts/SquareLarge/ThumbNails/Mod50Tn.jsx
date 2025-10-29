import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
import { TextShell }   from "core/components";
//Own components

const Mod50Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
			pr="5%"
			pl="32%"
		>
			<Stack
				spacing={"0.2em"}
				w="100%"
			>
				<Stack
					spacing={"0.13em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="60%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices width="50%" align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.13em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="60%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices width="50%" align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.13em"}
				>
					<div>
						<TextShell.TitleSmall width="60%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices width="50%" align="left" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod50Tn;
