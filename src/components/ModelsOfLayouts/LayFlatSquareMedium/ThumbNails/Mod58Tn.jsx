import { Flex, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod58Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
		>
			<Flex
				gap="0.1em"
				h="100%"
				w="100%"
			>
				<Stack  w="70%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="30%"
					h="100%"
					spacing={"0.1em"}
					pr="1%"
					pt="1%"
					pb="1%"
				>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						w="100%"
						h="calc(50% - 0.05em)"
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

export default Mod58Tn;
