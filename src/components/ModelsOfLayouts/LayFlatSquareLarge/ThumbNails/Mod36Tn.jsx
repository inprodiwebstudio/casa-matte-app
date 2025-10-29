import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod36Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="50%" gap="0.1em">
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
				<Flex w="100%" h="50%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
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

export default Mod36Tn;
