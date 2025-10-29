import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod34Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Box
					h="100%"
					w="calc(65% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Group
					h="100%"
					w="calc(35% - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Box>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Box>
					<Box
						h="calc(100% / 3 - 0.067em)"
						w="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Box>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod34Tn;
