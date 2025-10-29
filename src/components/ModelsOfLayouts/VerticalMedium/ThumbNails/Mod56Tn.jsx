import { Flex, Stack } from "@mantine/core";

//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod56Tn = ({photos}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack
				w="60%"
				mb="0.15em"
			>
				<TextShell.SubTitle />
			</Stack>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayoutPreview
					imageData={photos?.[1] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod56Tn;
