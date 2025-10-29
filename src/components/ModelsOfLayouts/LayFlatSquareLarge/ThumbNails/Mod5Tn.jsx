import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod5Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="15%"
			pb="15%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod5Tn;
