import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod21Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="22%"
			pb="22%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod21Tn;
