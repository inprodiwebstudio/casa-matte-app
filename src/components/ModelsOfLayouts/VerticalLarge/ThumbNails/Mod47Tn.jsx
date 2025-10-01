import { Center, Stack } from "@mantine/core";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { TextShell }     from "core/components";

const Mod47Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				w="30%"
				p="0%"
				spacing={"0.2em"}
				align="center"
				justify="center"
			>
				<Stack
					w="100%"
					spacing={"0.1em"}
					align="flex-start"
					justify="flex-start"
				>
					<TextShell.Title width="50%" align="flex-start" />
					<DividerLayout long="0.3em" position="h" />
					<TextShell.BodyIndices align="flex-start" width="100%" />
				</Stack>
				<Stack
					w="100%"
					spacing={"0.1em"}
					justify="flex-start"
					align="flex-start"
				>
					<TextShell.Title width="50%" align="flex-start" />
					<DividerLayout long="0.3em" position="h" />
					<TextShell.BodyIndices align="flex-start" width="100%" />
				</Stack>
				<Stack
					w="100%"
					spacing={"0.1em"}
					justify="flex-start"
					align="flex-start"
				>
					<TextShell.Title width="50%" align="flex-start" />
					<DividerLayout long="0.3em" position="h" />
					<TextShell.BodyIndices align="flex-start" width="100%" />
				</Stack>
			</Stack>
		</Center>
	);
};

export default Mod47Tn;
