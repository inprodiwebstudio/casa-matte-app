import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod13Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="10%"
			pr="10%"
			p="30%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					w="calc(100% / 2 - 0.05em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 2 - 0.05em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod13Tn;
