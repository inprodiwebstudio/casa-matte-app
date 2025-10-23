import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod14Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="25%"
			pb="25%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w="calc(100% / 3 - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod14Tn;
