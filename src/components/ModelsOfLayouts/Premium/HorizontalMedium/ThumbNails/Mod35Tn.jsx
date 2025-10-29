import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod35Tn = ({photos}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[4] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[5] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(66.57% - 0.05em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[6] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.05em)"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[7] ?? {}}
					/>
				</Stack>
			</Stack>
		</Group>
	);
};

export default Mod35Tn;
