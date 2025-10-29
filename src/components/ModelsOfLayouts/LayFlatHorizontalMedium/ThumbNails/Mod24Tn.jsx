import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod24Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="7%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="50%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
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
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						h="calc(50% - 0.05em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod24Tn;
