import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod16Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="34%"
			pb="34%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod16Tn;
