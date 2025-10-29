import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod56Tn = ({photos}) => {
	return (
		<Flex
			p="10%"
			pl="0%"
			pr="0%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.2em"
			direction="column"
		>
			<Stack
				spacing="0em"
				w="100%"
			>
				<div>
					<TextShell.Title />
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0em"
				w="70%"
			>
				<div>
					<TextShell.SubTitle />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod56Tn;
