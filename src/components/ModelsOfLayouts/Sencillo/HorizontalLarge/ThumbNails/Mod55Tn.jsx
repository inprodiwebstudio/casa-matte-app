import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod55Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="10%"
			pr="10%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(33.33% - 0.067em)"
			>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[4] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[5] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod55Tn;
