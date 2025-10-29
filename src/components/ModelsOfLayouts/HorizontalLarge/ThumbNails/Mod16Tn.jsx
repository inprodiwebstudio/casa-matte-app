import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod16Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="3%"
			pb="3%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
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
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod16Tn;
