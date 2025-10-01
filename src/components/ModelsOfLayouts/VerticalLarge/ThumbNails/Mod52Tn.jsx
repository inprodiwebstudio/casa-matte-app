import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod52Tn = ({photos}) => {
	return (
		<Flex
			w="100%"
			h="100%"
			pt="13%"
			pb="13%"
			pl="40%"
			justify="center"
			align="center"
		>
			<Stack
				p="0%"
				m="0%"
				w="100%"
				h="100%"
				justify="center"
				align="center"
				spacing={"0.2em"}
			>
				<TextShell.Title width="70%" align="flex-end" />
				<Stack
					p="0%"
					w="100%"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<TextShell.SubTitle width="40%" align="flex-start" />
			</Stack>
		</Flex>
	);
};

export default Mod52Tn;
