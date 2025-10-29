import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod4Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="25%"
			pt="21%"
			pb="21%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod4Tn;
