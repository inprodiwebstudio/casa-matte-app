import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod50Tn = () => {
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
				spacing={"0.2em"}
				w="90%"
				pl="35%"
				pr="5%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<Stack
					spacing={"0.1em"}
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
					spacing={"0.1em"}
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
					spacing={"0.1em"}
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
