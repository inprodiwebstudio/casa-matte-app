import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod58Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pt="15%"
			pb="15%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[4] ?? {}}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod58Tn;
