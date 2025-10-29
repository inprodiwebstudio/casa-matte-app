import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod36Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="18%"
			pb="18%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Box>
				</Group>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.05em)"
					spacing={"0.1em"}
				>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[4] ?? {}}
						/>
					</Box>
					<Box
						w="calc(100% / 3 - 0.067em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[5] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod36Tn;
