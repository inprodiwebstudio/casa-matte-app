import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod52Tn = ({photos}) => {
	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify="center"
			direction="column"
		>
			<Stack
				spacing="5%"
				w="70%"
				h="75%"
			>
				<Stack w="100%" h="100%" spacing="8%">
					<Stack mr="10%">
						<TextShell.Title />
					</Stack>
					<Stack w="100%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack mr="40%">
					<TextShell.SubTitle />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod52Tn;
