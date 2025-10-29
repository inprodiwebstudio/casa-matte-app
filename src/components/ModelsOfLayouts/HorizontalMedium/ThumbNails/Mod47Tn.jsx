import { Flex, Stack } from "@mantine/core";
import { TextShell }   from "core/components";

const Mod47Tn = () => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="55%"
				mah="90%"
				spacing={"0.15em"}
				aria-hidden
				style={{overflow : "hidden"}}
			>
				<div
					style={{
						textTransform : "uppercase",
					}}
				>
					<TextShell.SubTitle width="50%" align="flex-start" />
				</div>
				<TextShell.BodyParagraph align="flex-start" />
			</Stack>
		</Flex>
	);
};

export default Mod47Tn;
