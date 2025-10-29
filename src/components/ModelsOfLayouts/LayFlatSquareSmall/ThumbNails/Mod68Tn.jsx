import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod68Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="15%"
			pb="15%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(33.33% - 0.067em)"
					h="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod68Tn;
