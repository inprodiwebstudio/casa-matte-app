import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod31Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[4] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[5] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod31Tn;
