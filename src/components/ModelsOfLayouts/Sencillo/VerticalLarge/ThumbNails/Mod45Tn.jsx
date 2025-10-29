import { Center, Stack } from "@mantine/core";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { TextShell }     from "core/components";

const Mod45Tn = () => {
	return (
		<Center
			w="100%"
			h="100%"
		>
			<Stack
				w="50%"
				p="0%"
				spacing={"0.2em"}
				align="center"
				justify="center"
			>
				<TextShell.Title width="60%" align="center" />
				<DividerLayout long="0.3em" position="h" />
				<TextShell.BodyIndices align="center" />
			</Stack>
		</Center>
	);
};

export default Mod45Tn;
