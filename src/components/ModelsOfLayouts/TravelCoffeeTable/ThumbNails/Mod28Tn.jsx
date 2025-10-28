import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";


const Mod28Tn = () => {

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
				<Stack
					spacing="0.13em"
					aria-hidden
				>
					<div
						style={{
							textTransform : "uppercase",
						}}
					>
						<TextShell.TitleSmall width="100%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					spacing="0.13em"
					aria-hidden
				>
					<div>
						<TextShell.TitleSmall width="100%" align="left" />
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<TextShell.BodyIndices align="left" />
					</div>
				</Stack>
				<Stack
					mah="70%"
					spacing="0.13em"
				>
					<div>
						<TextShell.TitleSmall width="100%" align="left" />
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

export default Mod28Tn;
