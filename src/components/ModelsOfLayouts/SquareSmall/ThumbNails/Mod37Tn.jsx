import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod37Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			spacing={"0.1em"}
		>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Box>
			</Group>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[4] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[5] ?? {}}
					/>
				</Box>
			</Group>
			<Group
				w={"100%"}
				h={"calc(100% / 3 - 0.067em)"}
				spacing={"0.1em"}
			>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[6] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[7] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					w={"calc(100% / 3 - 0.067em)"}
				>
					<ImgLayoutPreview
						imageData={photos?.[8] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod37Tn;
