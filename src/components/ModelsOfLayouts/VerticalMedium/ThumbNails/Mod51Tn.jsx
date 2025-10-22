import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod51Tn = ({photos}) => {
	return (
		<Flex
			p="4%"
			pt="20%"
			pb="20%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="10%"
			direction="column"
		>
			<Stack
				w="100%"
			>
				<TextShell.Title />
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="50%"
			>
				<TextShell.SubTitle />
			</Stack>
		</Flex>
	);
};

export default Mod51Tn;
