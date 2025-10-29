import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod8Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="30%"
			pb="30%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod8Tn;
