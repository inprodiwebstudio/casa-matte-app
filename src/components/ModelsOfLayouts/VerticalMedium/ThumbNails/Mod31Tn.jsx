import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod31Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.2em"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="100%" h="50%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Flex w="100%" h="25%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
				</Flex>
				<Flex w="100%" h="25%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[4] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod31Tn;
