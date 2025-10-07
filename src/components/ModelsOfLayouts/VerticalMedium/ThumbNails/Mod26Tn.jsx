import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod26Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="18%"
			pl="0.2em"
			pr="0.2em"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="50%" gap="0.1em">
					<Stack w="30%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack w="70%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Flex>
				<Flex w="100%" h="50%" gap="0.1em">
					<Stack w="70%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack w="30%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod26Tn;
