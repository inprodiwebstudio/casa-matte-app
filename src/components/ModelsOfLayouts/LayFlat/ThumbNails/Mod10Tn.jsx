import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod10Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="15%"
			pt="40%"
			pb="40%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod10Tn;
