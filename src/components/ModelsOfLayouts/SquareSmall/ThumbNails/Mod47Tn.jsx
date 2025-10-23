import { Center, Flex, Stack } from "@mantine/core";
import DividerLayout           from "components/LayoutHandler/DividerLayout";
//Own components
import { TextShell } from "core/components";

const Mod47Tn = () => {
	return (
		<Flex
			p="8%"
			pb="5%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="90%"
				mah="80%"
				spacing="0.2em"
				aria-hidden
				sx={{
					overflow : "hidden",
				}}
				align="center"
			>
				<Stack
					spacing={"0.13em"}
					w={"40%"}
				>
					<TextShell.Title width="100%" align="center" />
					<Center>
						<DividerLayout long="0.3em" position="v" />
					</Center>
				</Stack>
				<div
					style={{
						width : "50%",
					}}
				>
					<TextShell.BodyIndices align="center" />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod47Tn;
