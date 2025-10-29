import { Box, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod8Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="15%"
			pr="15%"
			p="2%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Box
					h="50%"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					h="50%"
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

export default Mod8Tn;
