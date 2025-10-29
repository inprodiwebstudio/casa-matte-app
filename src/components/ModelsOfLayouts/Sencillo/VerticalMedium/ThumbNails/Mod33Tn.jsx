import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod33Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.2em"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="60%" h="100%" spacing="0.1em">
					<Stack w="100%" h="33.33%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack w="40%" h="100%" spacing="0.1em">
					<Stack w="100%" h="50%">
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="50%">
						<ImgLayoutPreview
							imageData={photos?.[4] ?? {}}
						/>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod33Tn;
