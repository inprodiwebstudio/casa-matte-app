import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod25Tn = ({photos}) => {
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
					w="50%"
					h="100%"
					spacing={"0.1em"}
				>
					<Stack
						h="calc(50% - 0.05em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						h="calc(50% - 0.05em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack w="50%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod25Tn;
