import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod54Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.2% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(66.8% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
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
					w="calc(66.8% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.2% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod54Tn;
