import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod43Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
				</Group>
				<Group
					spacing={"0.1em"}
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod43Tn;
