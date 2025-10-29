import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod9Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pt="32%"
			pb="32%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod9Tn;
