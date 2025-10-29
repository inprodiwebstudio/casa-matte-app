import { Center, Flex, Stack } from "@mantine/core";
import DividerLayout           from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

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
				w={"35%"}
				mah="80%"
				spacing={"0.2em"}
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					spacing={"0.2em"}
					w="100%"
				>
					<TextShell.Title width="100%" align="left" />
					<Center>
						<DividerLayout weight="2px" long="0.3em" position="h" />
					</Center>
				</Stack>
				<div
					style={{
						width : "100%",
					}}
				>
					<TextShell.BodyIndices align="center" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod48Tn;
