import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod49Tn = () => {
	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
			pt="10%"
			pb="10%"
		>
			<Stack
				spacing={"0.2em"}
				w="78%"
				pl="30%"
				pr="10%"
			>
				<Stack
					spacing={"0.1em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="70%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.1em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="70%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing={"0.1em"}
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="70%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod49Tn;
