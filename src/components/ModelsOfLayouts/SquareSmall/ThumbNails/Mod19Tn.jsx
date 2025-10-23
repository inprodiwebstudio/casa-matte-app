import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod19Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Box
					w="100%"
					h="calc(100% / 2 - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 2 - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Box>
					<Box
						w="calc(100% / 2 - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod19Tn;
