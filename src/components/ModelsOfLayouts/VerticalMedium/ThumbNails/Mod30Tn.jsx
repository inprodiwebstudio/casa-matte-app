import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod30Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.2em"
			pr="0.2em"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="33.33%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Flex>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
				<Flex w="100%" h="33.33%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod30Tn;
