import { Box, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod13Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="20%"
			pr="20%"
			p="10%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					h="calc(100% / 2 - 0.05em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					h="calc(100% / 2 - 0.05em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Mod13Tn;
