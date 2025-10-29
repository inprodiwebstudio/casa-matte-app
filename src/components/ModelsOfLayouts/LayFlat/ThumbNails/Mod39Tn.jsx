import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod39Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="13%"
			pb="13%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod39Tn;
