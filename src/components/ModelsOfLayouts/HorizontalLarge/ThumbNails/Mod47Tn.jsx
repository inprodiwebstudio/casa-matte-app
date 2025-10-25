import { Group, Stack } from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components

const Mod47Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						h="100%"
						w="calc(50% - 0.05em)"
					>
						<ImgLayoutPreview
							imageData={photos?.[1] ?? {}}
						/>
					</Stack>
					<Stack
						h="100%"
						w="calc(50% - 0.05em)"
					>
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod47Tn;
